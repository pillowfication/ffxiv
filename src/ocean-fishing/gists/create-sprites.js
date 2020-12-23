const fs = require('fs')
const path = require('path')
const bent = require('bent')
const { createCanvas, loadImage } = require('canvas')
const ICONS = require('./icons')

const getJSON = bent('json')
const ICON_ROWS = ICONS.length
const ICON_COLS = Math.max(...ICONS.map(row => row.length))
const ICON_SIZE = 40
const XIVAPI = 'https://xivapi.com'

const overrides = {
  'Beatific Vision': '/i/029000/029098.png',
  Executioner: '/i/029000/029092.png',
  Exterminator: '/i/029000/029347.png',
  Fishmonger: '/i/029000/029070.png',
  Gladius: '/i/029000/029022.png',
  'Prodigal Son': '/i/029000/029331.png',
  Prowler: '/i/029000/029066.png',
  Sabaton: '/i/029000/029077.png',
  'Shooting Star': '/i/029000/029157.png',
  Silencer: '/i/029000/029156.png',
  Sweeper: '/i/029000/029085.png'
}

const weird = [
  'Octopus Travelers',
  'Certifiable Shark Hunters',
  'Jelled Together',
  'Maritime Dragonslayers',
  'Balloon Catchers',
  'Crab Boat Crew',
  'Sticking it to the Manta'
]

const canvas = createCanvas(ICON_COLS * ICON_SIZE, ICON_ROWS * ICON_SIZE)
const ctx = canvas.getContext('2d')

;(async () => {
  for (let row = 0; row < ICON_ROWS; ++row) {
    for (let col = 0; col < ICONS[row].length; ++col) {
      const query = ICONS[row][col].replace(/\?/g, '')
      let img, url
      if (weird.includes(query)) {
        img = await loadImage(path.resolve(__dirname, ({
          'Octopus Travelers': './icons/octopodes.png',
          'Certifiable Shark Hunters': './icons/sharks.png',
          'Jelled Together': './icons/jellyfish.png',
          'Maritime Dragonslayers': './icons/seadragons.png',
          'Balloon Catchers': './icons/balloons.png',
          'Crab Boat Crew': './icons/crabs.png',
          'Sticking it to the Manta': './icons/mantas.png'
        })[query]))
      } else {
        url = overrides[query] ||
          (await getJSON(`${XIVAPI}/search?string=${encodeURIComponent(query)}`))
            .Results[0].Icon
        img = await loadImage(`${XIVAPI}${url}`)
      }
      ctx.drawImage(img, col * ICON_SIZE, row * ICON_SIZE)
      console.log(query, url)
    }
  }

  const out = fs.createWriteStream(path.resolve(__dirname, '../../../public/images/ocean-fish.png'))
  canvas.createPNGStream().pipe(out)
  out.on('finish', () => {
    console.log('Done!')
  })
})()
