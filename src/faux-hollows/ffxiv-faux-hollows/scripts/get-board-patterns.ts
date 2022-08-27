import fs from 'fs'
import path from 'path'
import puppeteer from 'puppeteer'

enum CellType {
  OutOfBounds = 0,
  Empty = 1,
  Wall = 2,
  Sword = 3,
  Coffer = 4,
  Commander = 5,
  CommanderPossible = 6
}

const cache: Record<string, Record<string, CellType>> = {}
async function getCellAt (page: puppeteer.Page, row: number, col: number, _pageCache?: string): Promise<CellType> {
  let _cache: Record<string, CellType> | undefined
  const key = `${row},${col}`
  if (_pageCache !== undefined) {
    _cache = cache[_pageCache] ?? (cache[_pageCache] = {})
    if (_cache[key] !== undefined) {
      return _cache[key]
    }
  }

  const cellType = await page.evaluate((args: any): CellType => {
    const cell = document.querySelector(`table tr:nth-child(${args.row as number}) td:nth-child(${args.col as number + 1})`)
    if (cell == null) {
      return args.CellType.OutOfBounds
    } else {
      const bg = window.getComputedStyle(cell).getPropertyValue('background-color')
      if (['rgb(217, 217, 217)'].includes(bg)) {
        return args.CellType.OutOfBounds
      } else if (['rgb(255, 255, 255)'].includes(bg)) {
        return args.CellType.Empty
      } else if (['rgb(153, 153, 153)'].includes(bg)) {
        return args.CellType.Wall
      } else if (['rgb(159, 197, 232)', 'rgb(164, 194, 244)'].includes(bg)) {
        return args.CellType.Sword
      } else if (['rgb(234, 153, 153)'].includes(bg)) {
        return args.CellType.Coffer
      } else if (['rgb(255, 0, 255)'].includes(bg)) {
        return args.CellType.Commander
      } else if (['rgb(255, 153, 0)'].includes(bg)) {
        return args.CellType.CommanderPossible
      } else {
        console.log('Unknown color:', bg)
        return args.CellType.OutOfBounds
      }
    }
  }, { row, col, CellType })

  if (_cache !== undefined) {
    _cache[key] = cellType
  }
  return cellType
}

void (async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  page.on('console', message => { console.log(message.text()) })

  const data: Record<string, { template: number[], boards: CellType[][] }> = {}

  for (const letter of ['A', 'B', 'C', 'D']) {
    for (const direction of ['←', '↑', '→', '↓']) {
      const pageName = `${letter}${direction}`
      console.log(pageName)
      await page.goto(`file:${path.resolve(__dirname, `../data/Faux Hollows Foxes/${letter} ${direction}.html`)}`)
      const boards: CellType[][] = []

      for (let i = 1; i <= 100; ++i) {
        for (let j = 1; j <= 100; ++j) {
          if (
            // Check if this is the corner of a board
            await getCellAt(page, i, j, pageName) !== CellType.OutOfBounds &&
            await getCellAt(page, i - 1, j, pageName) === CellType.OutOfBounds &&
            await getCellAt(page, i, j - 1, pageName) === CellType.OutOfBounds
          ) {
            const board: CellType[] = []
            for (let n = 0; n < 6; ++n) {
              for (let m = 0; m < 6; ++m) {
                board.push(await getCellAt(page, i + n, j + m, pageName))
              }
            }
            boards.push(board)
          }
        }
      }

      const template = Array(36).fill(null)
        .map((_, index) => index)
        .filter(index => boards[0][index] === CellType.Wall)

      data[`${letter}${direction}`] = { template, boards }
    }
  }

  await browser.close()
  fs.writeFileSync(path.resolve(__dirname, '../data/board-patterns.json'), JSON.stringify(data))
})()
