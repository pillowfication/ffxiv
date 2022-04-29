import React, { useState } from 'react'
import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { alpha } from '@mui/system'
import { Theme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Collapse from '@mui/material/Collapse'
import TableContainer from '@mui/material/TableContainer'
import Table from '@mui/material/Table'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import Typography from '@mui/material/Typography'
import MuiLink from '@mui/material/Link'
import Button from '@mui/material/Button'
import Page from '../../src/Page'
import Section from '../../src/Section'
import Link from '../../src/Link'
import Highlight from '../../src/Highlight'
import { $, $$ } from '../../src/MathJax'
import FruitIcon from '../../src/chocobo-color/FruitIcon'
import StainButton from '../../src/chocobo-color/StainButton'
import { stains, fruits } from '../../src/chocobo-color/ffxiv-chocobo-color/data'
import { fruitValues, Fruit, Color } from '../../src/chocobo-color/ffxiv-chocobo-color'
import translate from '../../src/translate'

// const MATRIX_SOLUTION = calculateFruitsMatrix(stains[1].color, stains[6].color).fruits
// const DISTANCE_SOLUTION = calculateFruitsDistance(stains[1].color, stains[6].color, 6).fruits
// console.log(MATRIX_SOLUTION)
// console.log(DISTANCE_SOLUTION)

const MATRIX_SOLUTION: Fruit[] = [
  8161, 8161, 8159, 8157, 8161, 8159, 8157, 8161, 8159, 8157, 8161, 8159, 8157, 8161, 8159, 8157, 8161, 8159, 8157, 8161, 8159, 8157, 8161, 8159, 8157, 8161, 8159, 8157, 8161, 8159, 8157, 8161, 8159, 8157, 8161, 8159, 8157, 8161, 8159, 8157, 8161, 8159, 8157, 8161, 8159, 8157, 8161, 8159, 8157, 8161, 8159, 8157, 8161, 8159, 8157, 8161, 8159, 8157, 8161, 8159, 8157, 8161, 8159, 8157, 8161, 8159, 8157, 8161, 8159, 8157, 8161, 8159, 8157, 8161, 8159, 8157, 8161, 8159, 8157, 8161, 8159, 8157, 8161, 8159, 8157, 8161, 8159, 8157, 8161, 8159, 8157, 8161, 8159, 8157, 8161, 8159, 8157, 8161, 8159, 8157, 8161, 8159, 8157, 8161, 8159, 8157, 8161, 8159, 8157
]
const DISTANCE_SOLUTION: Fruit[] = [
  8157, 8157, 8157, 8157, 8157, 8157, 8157, 8157, 8157, 8157, 8157, 8157, 8157, 8157, 8157, 8157, 8157, 8159, 8159, 8159, 8159, 8159, 8161, 8159, 8161, 8159, 8161, 8159, 8161, 8159, 8161, 8159, 8161, 8159, 8161, 8159, 8161, 8157, 8159, 8161, 8157, 8159, 8161, 8157, 8159, 8161, 8157, 8159, 8161, 8157, 8159, 8161, 8157, 8159, 8161, 8157, 8159, 8161, 8157, 8159, 8161, 8157, 8159, 8161, 8157, 8159, 8161, 8157, 8159, 8161, 8157, 8159, 8161, 8157, 8159, 8161, 8157, 8159, 8161, 8157, 8159, 8161, 8157, 8159, 8161, 8157, 8159, 8161, 8157, 8159, 8161, 8157, 8161, 8161, 8161, 8161, 8161
]

const POSITIVE_COLOR = (theme: Theme): string => alpha(theme.palette.success.main, 0.2)
const NEGATIVE_COLOR = (theme: Theme): string => alpha(theme.palette.error.main, 0.2)

function formatDiff (val: number, locale = 'en'): string {
  return val >= 0 ? '+' + val.toLocaleString(locale) : val.toLocaleString(locale)
}

const ClampedTable = (): React.ReactElement => {
  const [showClamping, setShowClamping] = useState(false)

  const handleClickToggleClamping = (): void => {
    setShowClamping(!showClamping)
  }

  return (
    <Box mb={2}>
      <Button variant='contained' onClick={handleClickToggleClamping}>{showClamping ? 'Hide' : 'Show'} Solutions</Button>
      <Collapse in={showClamping}>
      <TableContainer>
        <Table size='small' sx={{
          width: 'auto',
          margin: '0 auto',
          '& td': { py: 0 }
        }}>
          <TableHead>
            <TableRow>
              <TableCell colSpan={5} align='center'>Without clamping</TableCell>
              <TableCell colSpan={5} align='center'>With clamping</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(() => {
              const rows: React.ReactElement[] = []
              const length = Math.max(MATRIX_SOLUTION.length, DISTANCE_SOLUTION.length)
              let currentColorMatrix = stains[1].color
              let currentColorDistance = stains[1].color

              rows.push(
                <TableRow key={-1}>
                  <TableCell />
                  <TableCell>{$(`${currentColorMatrix.R}`)}</TableCell>
                  <TableCell>{$(`${currentColorMatrix.G}`)}</TableCell>
                  <TableCell>{$(`${currentColorMatrix.B}`)}</TableCell>
                  <TableCell><StainButton color={currentColorMatrix} /></TableCell>
                  <TableCell />
                  <TableCell>{$(`${currentColorDistance.R}`)}</TableCell>
                  <TableCell>{$(`${currentColorDistance.G}`)}</TableCell>
                  <TableCell>{$(`${currentColorDistance.B}`)}</TableCell>
                  <TableCell><StainButton color={currentColorDistance} /></TableCell>
                </TableRow>
              )

              for (let index = 0; index < length; ++index) {
                const matrixFruit = MATRIX_SOLUTION[index]
                const distanceFruit = DISTANCE_SOLUTION[index]
                if (matrixFruit !== undefined) {
                  currentColorMatrix = currentColorMatrix.add(fruitValues[matrixFruit])
                }
                if (distanceFruit !== undefined) {
                  currentColorDistance = currentColorDistance.add(fruitValues[distanceFruit])
                }

                rows.push(
                  <TableRow key={index}>
                    <TableCell align='center'>{matrixFruit !== undefined && <FruitIcon fruit={matrixFruit} size={0.8} />}</TableCell>
                    <TableCell align='center'>{matrixFruit !== undefined && $(`${currentColorMatrix.R}`)}</TableCell>
                    <TableCell align='center'>{matrixFruit !== undefined && $(`${currentColorMatrix.G}`)}</TableCell>
                    <TableCell align='center'>{matrixFruit !== undefined && $(`${currentColorMatrix.B}`)}</TableCell>
                    <TableCell>{matrixFruit !== undefined && <StainButton color={currentColorMatrix} />}</TableCell>
                    <TableCell align='center'>{distanceFruit !== undefined && <FruitIcon fruit={distanceFruit} size={0.8} />}</TableCell>
                    <TableCell align='center'>{distanceFruit !== undefined && $(`${currentColorDistance.R}`)}</TableCell>
                    <TableCell align='center'>{distanceFruit !== undefined && $(`${currentColorDistance.G}`)}</TableCell>
                    <TableCell align='center'>{distanceFruit !== undefined && $(`${currentColorDistance.B}`)}</TableCell>
                    <TableCell>{distanceFruit !== undefined && <StainButton color={currentColorDistance} />}</TableCell>
                  </TableRow>
                )
              }

              return rows
            })()}
          </TableBody>
        </Table>
      </TableContainer>
      </Collapse>
    </Box>
  )
}

const About = (): React.ReactElement => {
  const { t, i18n } = useTranslation('chocobo-color')
  const locale = i18n.language

  return (
    <Page title={[t('_title'), t('aboutPage._title')]}>
      <Section>
        <Typography paragraph>
          Your chocobo’s plumage can be modified by feeding it 6 possible fruits. Each fruit changes the chocobo’s RGB values according to the following table:
        </Typography>
        <TableContainer sx={{ mb: 2 }}>
          <Table size='small' sx={{ width: 'auto', margin: '0 auto' }}>
            <TableHead>
              <TableRow>
                <TableCell align='center'>Fruit</TableCell>
                <TableCell align='center'>{$('\\text{R}')}</TableCell>
                <TableCell align='center'>{$('\\text{G}')}</TableCell>
                <TableCell align='center'>{$('\\text{B}')}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                [
                  Fruit.XelphatolApple,
                  Fruit.MamookPear,
                  Fruit.OGhomoroBerries,
                  Fruit.DomanPlum,
                  Fruit.Valfruit,
                  Fruit.CieldalaesPineapple
                ]
                  .map(fruit => {
                    const { R, G, B } = fruitValues[fruit]
                    return (
                      <TableRow key={fruit}>
                        <TableCell><FruitIcon fruit={fruit} /> {translate(locale, fruits[fruit], 'name')}</TableCell>
                        <TableCell
                          align='center'
                          sx={{ backgroundColor: R > 0 ? POSITIVE_COLOR : R < 0 ? NEGATIVE_COLOR : 'none' }}
                        >
                          {$(formatDiff(R))}
                        </TableCell>
                        <TableCell
                          align='center'
                          sx={{ backgroundColor: G > 0 ? POSITIVE_COLOR : G < 0 ? NEGATIVE_COLOR : 'none' }}
                        >
                          {$(formatDiff(G))}
                        </TableCell>
                        <TableCell
                          align='center'
                          sx={{ backgroundColor: B > 0 ? POSITIVE_COLOR : B < 0 ? NEGATIVE_COLOR : 'none' }}
                        >
                          {$(formatDiff(B))}
                        </TableCell>
                      </TableRow>
                    )
                  })
              }
            </TableBody>
          </Table>
        </TableContainer>
        <Typography paragraph>
          RGB values can never exceed {$('250')} or go below {$('0')}. If eating a fruit will cause a value to go beyond the valid range, it will be clamped. The RGB values of possible colors are known, and the problem is how to determine what sequence of fruits will get from one color to another. Unfortunately, not all RGB values are possible since the fruits always change values in increments of {$('5')} (ignoring clamping). The goal is to reach certain RGB values such that the closest possible color is the desired color. Distance here is measured using the <MuiLink href='https://en.wikipedia.org/wiki/Euclidean_distance'>Euclidean norm</MuiLink> (assuming this is what FFXIV uses).
        </Typography>
        <Box mb={2}>
          {$$('\\lVert \\text{Color} \\rVert = \\sqrt{\\text{Color.R}^2 + \\text{Color.G}^2 + \\text{Color.B}^2}')}
        </Box>
      </Section>
      <Section title='Greedy Algorithm'>
        <Typography paragraph>
          A simple algorithm is to keep picking the fruit that gets us closest to the desired color, stopping when no single fruit can get any closer.
        </Typography>
        <Highlight language='typescript' sx={{ mb: 2 }}>
          {`
function calculate (startColor: Color, endColor: Color): Fruit[] {
  const solution: Fruit[] = []
  let currentColor = startColor
  let currentDistance = startColor.distanceTo(endColor)

  while (true) {
    // Find the best fruit
    const fruitsSorted = fruits.sort((fruitA, fruitB) =>
      currentColor.add(fruitA).distanceTo(endColor) -
      currentColor.add(fruitB).distanceTo(endColor)
    )
    const bestFruit = fruitsSorted[0]

    // If this fruit doesn't get us closer, stop
    if (currentColor.add(bestFruit).distanceTo(endColor) >= currentDistance) {
      return fruits

    // Otherwise, add it to the list and continue
    } else {
      fruits.push(bestFruit)
      currentColor = currentColor.add(bestFruit)
      currentDistance = currentColor.distanceTo(endColor)
    }
  }
}
          `.trim()}
        </Highlight>
        <Typography paragraph>
          This algorithm has several shortcomings, but performs decently well and serves as the basis to the actual algorithm used. The biggest issue is that the algorithm tends to stop early. Suppose the target color is {$('\\operatorname{RGB}(100, 100, 100)')}, and the current color is {$('\\operatorname{RGB}(105, 105, 105)')}. The current distance is {$('\\sqrt{75}')} and eating any fruit will cause this distance to jump up to {$('\\sqrt{100}')} or {$('\\sqrt{200}')}, so the algorithm terminates. But feeding the 3 fruits {translate(locale, fruits[Fruit.XelphatolApple], 'name')}, {translate(locale, fruits[Fruit.MamookPear], 'name')}, and {translate(locale, fruits[Fruit.OGhomoroBerries], 'name')} would land exactly on the target color.
        </Typography>
      </Section>
      <Section title='Matrix Algorithm'>
        <Typography paragraph>
          The next algorithm to consider involves treating the problem as a sort of matrix equation. Using the variables
        </Typography>
        <Box mb={2}>
          {$$(`
            \\begin{align}
              X & = \\text{# of ${translate(locale, fruits[Fruit.XelphatolApple], 'plural', 'singular')}} \\\\
              M & = \\text{# of ${translate(locale, fruits[Fruit.MamookPear], 'plural', 'singular')}} \\\\
              O & = \\text{# of ${translate(locale, fruits[Fruit.OGhomoroBerries], 'plural', 'singular')}} \\\\
              D & = \\text{# of ${translate(locale, fruits[Fruit.DomanPlum], 'plural', 'singular')}} \\\\
              V & = \\text{# of ${translate(locale, fruits[Fruit.Valfruit], 'plural', 'singular')}} \\\\
              C & = \\text{# of ${translate(locale, fruits[Fruit.CieldalaesPineapple], 'plural', 'singular')}} \\\\
            \\end{align}
          `)}
        </Box>
        <Typography paragraph>
          and not requiring them to be integers, we must solve
        </Typography>
        <Box mb={2}>
          {$$(`
            \\begin{array}{ll}
              \\text{minimize}   & \\phantom{+}X +M +O +D +V +C, \\\\
              \\\\
              \\text{subject to} & +X -M -O -D +V +C = R / 5, \\\\
                                 & -X +M -O +D -V +C = G / 5, \\\\
                                 & -X -M +O +D +V -C = B / 5, \\\\
              \\\\
              \\text{and}        & X, M, O, D, V, C \\geq 0 \\\\
            \\end{array}
          `)}
        </Box>
        <Typography paragraph>
          where {$('R, G, B')} is the difference {$('\\text{DesiredColor} - \\text{CurrentColor}')}. This does not take into account clamping, which can be avoided almost always. It gives only the number of fruits required, which is then ordered to hopefully avoid clamping. I did this by repeatedly picking fruits that minimize the distance to {$('\\operatorname{RGB}(\\frac{256}{2}, \\frac{256}{2}, \\frac{256}{2})')} using the <MuiLink href='https://en.wikipedia.org/wiki/Uniform_norm'>uniform norm</MuiLink>.
        </Typography>
        <Typography paragraph>
          Since the {$('D, V, C')} fruits are “opposites” of the {$('X, M, O')} fruits, we can drop the {$('D, V, C')} variables by removing the nonnegativity constraints on {$('X, M, O')}. This transforms the problem into the standard linear equation
        </Typography>
        <Box mb={2}>
          {$$(`
            \\begin{pmatrix}
              \\phantom{+}5 &            -5 &             -5 \\\\
                         -5 & \\phantom{+}5 &             -5 \\\\
                         -5 &            -5 &  \\phantom{+}5 \\\\
            \\end{pmatrix}
            \\begin{pmatrix}
              X \\\\ M \\\\ O
            \\end{pmatrix}
            =
            \\begin{pmatrix}
              R \\\\ G \\\\ B
            \\end{pmatrix}
          `)}
        </Box>
        <Typography paragraph>
          with a negative value of {$('X')} corresponding instead to a positive value of {$('D')}, etc. To turn the solutions into integers, I round them. (This doesn’t always give the closest color, and that problem is the <MuiLink href='https://en.wikipedia.org/wiki/Lattice_problem#Closest_vector_problem_(CVP)'>closest vector problem</MuiLink>. The lattice is “nice” enough though, and since I don’t end up using this strategy, I don’t bother optimizing it.) This algorithm can outperform the first algorithm in situations where the first algorithm would terminate early.
        </Typography>
      </Section>
      <Section title='Lookahead'>
        <Typography paragraph>
          To fix the issue of early termination in the first algorithm, some amount of lookahead is introduced. Instead of considering fruits one by one, the algorithm does the following:
        </Typography>
        <ol>
          <Typography component='li'>Compute all possible fruit combinations up to a length of {$('L')}</Typography>
          <Typography component='li'>Let {$('F')} be the fruit combination that lands closest to the target color</Typography>
          <Typography component='li'>If {$('F')} contains no fruits, then stop (no path gets closer)</Typography>
          <Typography component='li'>Otherwise, add the first fruit in {$('F')} to the solution and repeat</Typography>
        </ol>
        <Highlight language='typescript' sx={{ mb: 2 }}>
          {`
while (true) {
  // Find the best path
  const allPaths = computePaths(lookahead)
  const pathsSorted = allPaths.sort((pathA, pathB) =>
    currentColor.addPath(pathA).distanceTo(endColor) -
    currentColor.addPath(pathB).distanceTo(endColor)
  )

  // This assumes a stable sort so that the empty path is prioritized
  const bestPath = pathsSorted[0]

  // If no paths get us closer, stop
  if (bestPath.length === 0) {
    return fruits

  // Otherwise, add the first fruit in the path to the list and continue
  } else {
    const bestFruit = bestPath[0]
    fruits.push(bestFruit)
    currentColor = currentColor.add(bestFruit)
    currentDistance = currentColor.distanceTo(endColor)
  }
}
          `.trim()}
        </Highlight>
        <Typography paragraph>
          With a big enough lookahead, the algorithm is able to momentarily step further away from the target color in order to get closer later. The algorithm implemented on the <Link href='/chocobo-color'>Chocobo Color page</Link> is this algorithm with a lookahead of {$('L = 3')}, which specifically admits the strategy of eating 3 fruits to increase/reduce all values by 5. This performs very well.
        </Typography>
        <Typography paragraph>
          Lookahead also allows the algorithm to utilizing clamping, considering cases where the fruits no longer commute. For example, if the current color is {translate(locale, stains[1], 'name')} <StainButton inline stain={stains[1]} /> and the target color is {translate(locale, stains[6], 'name')} <StainButton inline stain={stains[6]} />, then we need to decrease the RGB values as much as possible. Without any clamping, this can be done in 110 fruits. With clamping, it’s possible to get as close with 97 fruits instead. It involves feeding a bunch of {translate(locale, fruits[Fruit.XelphatolApple], 'plural', 'singular')} first to max out the RGB’s red value so that subsequent {translate(locale, fruits[Fruit.XelphatolApple], 'plural', 'singular')} will lower the average RGB value quicker. Unfortunately, lookaheads with {$('L > 5')} quickly become infeasible, the benefits are small, and situations that can use it are rare.
        </Typography>
        <ClampedTable />
      </Section>
      <Section title='Optimality'>
        <Typography paragraph>
          Fortunately, a lookahead of {$('L = 3')} is enough to guarantee that the algorithm terminates with a color as close to the target color as possible (ignoring clamping). By feeding 2 fruits, any individual RGB value can be adjusted by {$('\\pm10')} while leaving the other two values unaffected. This means that the color the algorithm ends up at cannot have coordinates that differ from the target color’s by more than {$('5')}. The same must be true of the optimal solution.
        </Typography>
        <Typography paragraph>
          Let the solution the algorithm returns be {$('\\operatorname{RGB(r, g, b)}')}. Focusing only on the red component, the optimal solution must have a red component of {$('r-5')}, {$('r')}, or {$('r+5')}. Now consider the 27 points:
        </Typography>
        <TableContainer sx={{ mb: 2 }}>
          <Table size='small' sx={{ width: 'auto', margin: '0 auto' }}>
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell />
                <TableCell align='center'>{$('r-5')}</TableCell>
                <TableCell align='center'>{$('r')}</TableCell>
                <TableCell align='center'>{$('r+5')}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell component='th' scope='row' rowSpan={3} align='center'>{$('g-5')}</TableCell>
                <TableCell component='th' scope='row' align='center'>{$('b-5')}</TableCell>
                <TableCell align='center' sx={{ backgroundColor: POSITIVE_COLOR }}>{$('(r-5, g-5, b-5)')}</TableCell>
                <TableCell align='center' sx={{ backgroundColor: NEGATIVE_COLOR }}>{$('(r+0, g-5, b-5)')}</TableCell>
                <TableCell align='center' sx={{ backgroundColor: POSITIVE_COLOR }}>{$('(r+5, g-5, b-5)')}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component='th' scope='row' align='center'>{$('b')}</TableCell>
                <TableCell align='center' sx={{ backgroundColor: NEGATIVE_COLOR }}>{$('(r-5, g-5, b+0)')}</TableCell>
                <TableCell align='center' sx={{ backgroundColor: NEGATIVE_COLOR }}>{$('(r+0, g-5, b+0)')}</TableCell>
                <TableCell align='center' sx={{ backgroundColor: NEGATIVE_COLOR }}>{$('(r+5, g-5, b+0)')}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component='th' scope='row' align='center'>{$('b+5')}</TableCell>
                <TableCell align='center' sx={{ backgroundColor: POSITIVE_COLOR }}>{$('(r-5, g-5, b+5)')}</TableCell>
                <TableCell align='center' sx={{ backgroundColor: NEGATIVE_COLOR }}>{$('(r+0, g-5, b+5)')}</TableCell>
                <TableCell align='center' sx={{ backgroundColor: POSITIVE_COLOR }}>{$('(r+5, g-5, b+5)')}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component='th' scope='row' rowSpan={3} align='center'>{$('g')}</TableCell>
                <TableCell component='th' scope='row' align='center'>{$('b-5')}</TableCell>
                <TableCell align='center' sx={{ backgroundColor: NEGATIVE_COLOR }}>{$('(r-5, g+0, b-5)')}</TableCell>
                <TableCell align='center' sx={{ backgroundColor: NEGATIVE_COLOR }}>{$('(r+0, g+0, b-5)')}</TableCell>
                <TableCell align='center' sx={{ backgroundColor: NEGATIVE_COLOR }}>{$('(r+5, g+0, b-5)')}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component='th' scope='row' align='center'>{$('b')}</TableCell>
                <TableCell align='center' sx={{ backgroundColor: NEGATIVE_COLOR }}>{$('(r-5, g+0, b+0)')}</TableCell>
                <TableCell align='center' sx={{ backgroundColor: POSITIVE_COLOR }}>{$('(r+0, g+0, b+0)')}</TableCell>
                <TableCell align='center' sx={{ backgroundColor: NEGATIVE_COLOR }}>{$('(r+5, g+0, b+0)')}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component='th' scope='row' align='center'>{$('b+5')}</TableCell>
                <TableCell align='center' sx={{ backgroundColor: NEGATIVE_COLOR }}>{$('(r-5, g+0, b+5)')}</TableCell>
                <TableCell align='center' sx={{ backgroundColor: NEGATIVE_COLOR }}>{$('(r+0, g+0, b+5)')}</TableCell>
                <TableCell align='center' sx={{ backgroundColor: NEGATIVE_COLOR }}>{$('(r+5, g+0, b+5)')}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component='th' scope='row' rowSpan={3} align='center'>{$('g+5')}</TableCell>
                <TableCell component='th' scope='row' align='center'>{$('b-5')}</TableCell>
                <TableCell align='center' sx={{ backgroundColor: POSITIVE_COLOR }}>{$('(r-5, g+5, b-5)')}</TableCell>
                <TableCell align='center' sx={{ backgroundColor: NEGATIVE_COLOR }}>{$('(r+0, g+5, b-5)')}</TableCell>
                <TableCell align='center' sx={{ backgroundColor: POSITIVE_COLOR }}>{$('(r+5, g+5, b-5)')}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component='th' scope='row' align='center'>{$('b')}</TableCell>
                <TableCell align='center' sx={{ backgroundColor: NEGATIVE_COLOR }}>{$('(r-5, g+5, b+0)')}</TableCell>
                <TableCell align='center' sx={{ backgroundColor: NEGATIVE_COLOR }}>{$('(r+0, g+5, b+0)')}</TableCell>
                <TableCell align='center' sx={{ backgroundColor: NEGATIVE_COLOR }}>{$('(r+5, g+5, b+0)')}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component='th' scope='row' align='center'>{$('b+5')}</TableCell>
                <TableCell align='center' sx={{ backgroundColor: NEGATIVE_COLOR }}>{$('(r-5, g+5, b+5)')}</TableCell>
                <TableCell align='center' sx={{ backgroundColor: NEGATIVE_COLOR }}>{$('(r+0, g+5, b+5)')}</TableCell>
                <TableCell align='center' sx={{ backgroundColor: NEGATIVE_COLOR }}>{$('(r+5, g+5, b+5)')}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Typography paragraph>
          One of these points is the optimal solution, and all the points marked as red are impossible to reach due to parity (see the Error section below). Starting at {$('(r, g, b)')}, we must show that the algorithm considers all the green points with a lookahead of {$('L = 3')}. By symmetry, there are only 3 cases that need to be checked.
        </Typography>
        <TableContainer sx={{ mb: 2 }}>
          <Table size='small' sx={{ width: 'auto', margin: '0 auto' }}>
            <TableHead>
              <TableRow>
                <TableCell align='center'>Target color</TableCell>
                <TableCell align='center'>Solution</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell align='center'>{$('(r+0, g+0, b+0)')}</TableCell>
                <TableCell align='center'><Typography>No fruits</Typography></TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>{$('(r+5, g+5, b+5)')}</TableCell>
                <TableCell align='center'><FruitIcon fruit={Fruit.DomanPlum} /><FruitIcon fruit={Fruit.Valfruit} /><FruitIcon fruit={Fruit.CieldalaesPineapple} /></TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>{$('(r+5, g+5, b-5)')}</TableCell>
                <TableCell align='center'><FruitIcon fruit={Fruit.CieldalaesPineapple} /></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Typography paragraph>
          Thus the algorithm is optimal, in the sense that it returns the closest possible color without clamping.
        </Typography>
      </Section>
      <Section title='Error'>
        <Typography paragraph>
          The algorithm can get us pretty close to the desired color, but it’s not always possible to be exact. The two closest possible colors a chocobo can be are {translate(locale, stains[79], 'name')} <StainButton inline stain={stains[79]} /> and {translate(locale, stains[81], 'name')} <StainButton inline stain={stains[81]} />. These two have a distance of {$('9.434')}, so if we can guarantee an error of less than {$('9.434 / 2 = 4.717')}, then the desired color will always be the closest color, but this is impossible to guarantee.
        </Typography>
        <Typography paragraph>
          Feeding a fruit will always change the parity of the RGB values, i.e. odd → even or even → odd. If the target color is {$('\\operatorname{RGB}(100, 100, 100)')} with all even values, and the current color is {$('\\operatorname{RGB}(100, 100, 105)')} with 1 odd value, no sequence of fruits can get closer (ignoring clamping). Thus the maximum error is bounded below by {$('5')}, and we cannot guarantee that the closest color is the desired color. The maximum error is actually {$('5\\sqrt{5}/2 \\approx 5.59')} given by the vector {$('(5, 2.5, 0)')}.
        </Typography>
        <Typography paragraph>
          A possible solution is to instead aim for some color that is near the desired color and far from other nearby colors, maximizing the likelihood that we end up at the desired color. The hope is that our final color ends up inside the <MuiLink href='https://en.wikipedia.org/wiki/Voronoi_diagram'>Voronoi cell</MuiLink> of the desired color, so a sensible target would be the centroid of this region. In 2D, this may look like
        </Typography>
        <Box component='figure' mb={2} textAlign='center'>
          <img src='/images/chocobo-color/voronoi-diagram.png' />
          <figcaption>
            <Typography variant='caption'>The dots are colors we want to achieve, and the crosses are alternative targets.</Typography>
          </figcaption>
        </Box>
        <Typography paragraph>
          This would allow more room for error, but I decided computing these targets would be too much work. It would also complicate recoloring chocobos. As long as the algorithm gets as close to the desired color as possible (ignoring clamping), it’s sufficient. There are only two color combinations where the closest color does not lead to the desired color, and those have hardcoded solutions for now.
        </Typography>
        <TableContainer sx={{ mb: 2 }}>
          <Table size='small' sx={{ width: 'auto', margin: '0 auto' }}>
            <TableBody>
              <TableRow>
                <TableCell component='th' scope='row' align='center'>Current color</TableCell>
                <TableCell align='center'>{translate(locale, stains[37], 'name')}<br />{$('(250, 198, 43)')}</TableCell>
                <TableCell align='center'><StainButton stain={stains[37]} /></TableCell>
                <TableCell align='center'>{translate(locale, stains[57], 'name')}<br />{$('(150, 189, 185)')}</TableCell>
                <TableCell align='center'><StainButton stain={stains[57]} /></TableCell>
              </TableRow>
              <TableRow>
                <TableCell component='th' scope='row' align='center'>Desired color</TableCell>
                <TableCell align='center'>{translate(locale, stains[79], 'name')}<br />{$('(50, 44, 59)')}</TableCell>
                <TableCell align='center'><StainButton stain={stains[79]} /></TableCell>
                <TableCell align='center'>{translate(locale, stains[79], 'name')}<br />{$('(50, 44, 59)')}</TableCell>
                <TableCell align='center'><StainButton stain={stains[79]} /></TableCell>
              </TableRow>
              <TableRow>
                <TableCell component='th' scope='row' align='center'>“Optimal” solution</TableCell>
                <TableCell align='center'>{$('(55, 43, 58)')}</TableCell>
                <TableCell align='center'><StainButton color={new Color(55, 43, 58)} /></TableCell>
                <TableCell align='center'>{$('(55, 44, 60)')}</TableCell>
                <TableCell align='center'><StainButton color={new Color(55, 44, 60)} /></TableCell>
              </TableRow>
              <TableRow>
                <TableCell component='th' scope='row' align='center'>Resultant color</TableCell>
                <TableCell align='center'>{translate(locale, stains[81], 'name')}<br />{$('(59, 42, 61)')}</TableCell>
                <TableCell align='center'><StainButton stain={stains[81]} /></TableCell>
                <TableCell align='center'>{translate(locale, stains[81], 'name')}<br />{$('(59, 42, 61)')}</TableCell>
                <TableCell align='center'><StainButton stain={stains[81]} /></TableCell>
              </TableRow>
              <TableRow>
                <TableCell component='th' scope='row' align='center'>Adjusted solution</TableCell>
                <TableCell align='center'>Remove 1× <FruitIcon fruit={Fruit.XelphatolApple} size={0.8} /><br />{$('(50, 48, 63)')}</TableCell>
                <TableCell align='center'><StainButton color={new Color(50, 48, 63)} /></TableCell>
                <TableCell align='center'>Add 1× <FruitIcon fruit={Fruit.MamookPear} size={0.8} /><br />{$('(50, 49, 55)')}</TableCell>
                <TableCell align='center'><StainButton color={new Color(50, 49, 55)} /></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Section>
    </Page>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common', 'chocobo-color']))
    }
  }
}

export default About
