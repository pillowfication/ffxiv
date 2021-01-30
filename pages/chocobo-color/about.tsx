import React, { useState } from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import { fade } from '@material-ui/core/styles/colorManipulator'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import MuiLink from '@material-ui/core/Link'
import Button from '@material-ui/core/Button'
import Collapse from '@material-ui/core/Collapse'
import TableContainer from '@material-ui/core/TableContainer'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import Page from '../../src/Page'
import Section from '../../src/Section'
import Link from '../../src/Link'
import Highlight from '../../src/Highlight'
import { $, $$ } from '../../src/MathJax'
import FruitIcon from '../../src/chocobo-color/FruitIcon'
import StainButton from '../../src/chocobo-color/StainButton'
import { stains, fruits } from '../../src/chocobo-color/ffxiv-chocobo-color/data'
import { fruitValues, Fruit } from '../../src/chocobo-color/ffxiv-chocobo-color'
import { translate } from '../../src/utils'
import { useTranslation } from '../../src/i18n'

const MATRIX_SOLUTION = [
  8159, 8159, 8158, 8157, 8159, 8158, 8157, 8159, 8158, 8157, 8159, 8158, 8157, 8159, 8158, 8157, 8159, 8158, 8157, 8159, 8158, 8157, 8159, 8158, 8157, 8159, 8158, 8157, 8159, 8158, 8157, 8159, 8158, 8157, 8159, 8158, 8157, 8159, 8158, 8157, 8159, 8158, 8157, 8159, 8158, 8157, 8159, 8158, 8157, 8159, 8158, 8157, 8159, 8158, 8157, 8159, 8158, 8157, 8159, 8158, 8157, 8159, 8158, 8157, 8159, 8158, 8157, 8159, 8158, 8157, 8159, 8158, 8157, 8159, 8158, 8157, 8159, 8158, 8157, 8159, 8158, 8157, 8159, 8158, 8157, 8159, 8158, 8157, 8159, 8158, 8157, 8159, 8158, 8157, 8159, 8158, 8157, 8159, 8158, 8157, 8159, 8158, 8157, 8159, 8158, 8157, 8159, 8158, 8157
]

const DISTANCE_SOLUTION = [
  8157, 8157, 8157, 8157, 8157, 8157, 8157, 8157, 8157, 8157, 8157, 8157, 8157, 8157, 8157, 8157, 8157, 8158, 8158, 8158, 8158, 8158, 8159, 8158, 8159, 8158, 8159, 8158, 8159, 8158, 8159, 8158, 8159, 8158, 8159, 8158, 8159, 8157, 8158, 8159, 8157, 8158, 8159, 8157, 8158, 8159, 8157, 8158, 8159, 8157, 8158, 8159, 8157, 8158, 8159, 8157, 8158, 8159, 8157, 8158, 8159, 8157, 8158, 8159, 8157, 8158, 8159, 8157, 8158, 8159, 8157, 8158, 8159, 8157, 8158, 8159, 8157, 8158, 8159, 8157, 8158, 8159, 8157, 8158, 8159, 8157, 8158, 8159, 8157, 8158, 8159, 8157, 8159, 8159, 8159, 8159, 8159
]

function formatDiff (val: number, locale = 'en') {
  return val >= 0 ? '+' + val.toLocaleString(locale) : val.toLocaleString(locale)
}

const useStyles = makeStyles(theme => ({
  image: {
    maxWidth: '100%'
  },
  table: {
    width: 'initial',
    margin: theme.spacing(0, 'auto')
  },
  RGB: {
    padding: `${theme.spacing(1, 4)} !important`
  },
  positive: {
    backgroundColor: theme.palette.type === 'dark'
      ? fade(theme.palette.success.main, 0.15)
      : fade(theme.palette.success.main, 0.25)
  },
  negative: {
    backgroundColor: theme.palette.type === 'dark'
      ? fade(theme.palette.error.main, 0.15)
      : fade(theme.palette.error.main, 0.25)
  },
  stain: {
    margin: 0,
    fontSize: '0.75em',
    verticalAlign: 'text-bottom'
  },
  clampTable: {
    width: 'initial',
    margin: theme.spacing(0, 'auto'),
    '& td': {
      height: 40,
      padding: theme.spacing(0, 2)
    }
  }
}))

const About = () => {
  const classes = useStyles()
  const { t, i18n } = useTranslation('chocobo-color')
  const [showClamping, setShowClamping] = useState(false)
  const locale = i18n.language

  const handleClickToggleClamping = () => {
    setShowClamping(!showClamping)
  }

  return (
    <Page title={`${t('title')} - ${t('about')}`}>
      <Section>
        <Typography paragraph>
          Your chocobo’s plumage can be modified by feeding it 6 possible fruits. Each fruit changes the chocobo’s RGB values according to the following table:
        </Typography>
        <Box mb={2}>
          <TableContainer>
            <Table size='small' className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell align='center'>Fruit</TableCell>
                  <TableCell align='center'>R</TableCell>
                  <TableCell align='center'>G</TableCell>
                  <TableCell align='center'>B</TableCell>
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
                            className={clsx(classes.RGB, R > 0 ? classes.positive : R < 0 ? classes.negative : undefined)}
                          >
                            {formatDiff(R)}
                          </TableCell>
                          <TableCell
                            align='center'
                            className={clsx(classes.RGB, G > 0 ? classes.positive : G < 0 ? classes.negative : undefined)}
                          >
                            {formatDiff(G)}
                          </TableCell>
                          <TableCell
                            align='center'
                            className={clsx(classes.RGB, B > 0 ? classes.positive : B < 0 ? classes.negative : undefined)}
                          >
                            {formatDiff(B)}
                          </TableCell>
                        </TableRow>
                      )
                    })
                }
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        <Typography paragraph>
          RGB values can never exceed 250 or go below 0. If eating a fruit will cause a value to go beyond the valid range, it will be clamped. The RGB values of possible colors are known, and the problem is how to determine what sequence of fruits will get from one color to another. Unfortunately, not all RGB values are possible since the fruits always change values in increments of 5 (disregarding clamping). The goal is to reach certain RGB values such that the closest possible color is the desired color. Distance here is measured using the <MuiLink href='https://en.wikipedia.org/wiki/Euclidean_distance'>Euclidean norm</MuiLink>.
        </Typography>
        {$$('\\lVert \\text{Color} \\rVert = \\sqrt{\\text{Color.R}^2 + \\text{Color.G}^2 + \\text{Color.B}^2}')}
      </Section>
      <Section title='Greedy Algorithm'>
        <Typography paragraph>
          A simple algorithm is to keep picking the fruit that gets us closest to the desired color, stopping when no single fruit can get any closer.
        </Typography>
        <Box mb={2}>
          <Highlight language='typescript'>
            {`
function calculate (fromColor: Color, toColor: Color): Fruit[] {
  const solution: Fruit[] = []
  let currentColor = fromColor
  let currentDistance = fromColor.distanceTo(toColor)

  while (true) {
    // Find the best fruit
    const fruitsSorted = fruits.sort((fruitA, fruitB) =>
      currentColor.add(fruitA).distanceTo(toColor) - currentColor.add(fruitB).distanceTo(toColor)
    )
    const bestFruit = fruitsSorted[0]

    // If this fruit doesn't get us closer, stop
    if (currentColor.add(bestFruit).distanceTo(toColor) >= currentDistance) {
      return fruits

    // Otherwise, add it to the list and continue
    } else {
      fruits.push(bestFruit)
      currentColor = currentColor.add(bestFruit)
      currentDistance = currentColor.distanceTo(toColor)
    }
  }
}
            `.trim()}
          </Highlight>
        </Box>
        <Typography paragraph>
          This algorithm has several shortcomings, but performs decently well and serves as the basis to the actual algorithm I used. The biggest issue is that the algorithm tends to stop early. Suppose the target color is {$('\\operatorname{RGB}(100, 100, 100)')}, and the current color is {$('\\operatorname{RGB}(105, 105, 105)')}. The current distance is {$('\\sqrt{75}')} and eating any fruit will cause this distance to jump up to {$('\\sqrt{100}')} or {$('\\sqrt{200}')}, so the algorithm terminates. But feeding the 3 fruits Xelphatol Apple, Doman Plum, and Mamook Pear would land exactly on the target color.
        </Typography>
      </Section>
      <Section title='Matrix Algorithm'>
        <Typography paragraph>
          The next algorithm to consider involves treating the problem as an <MuiLink href='https://en.wikipedia.org/wiki/Integer_programming'>integer linear program</MuiLink>. Using the variables
        </Typography>
        {$$(`
          \\begin{align}
            X & = \\text{# of Xelphatol Apples} \\\\
            D & = \\text{# of Doman Plums} \\\\
            M & = \\text{# of Mamook Pears} \\\\
            V & = \\text{# of Valfruits} \\\\
            O & = \\text{# of O'Ghomoro Berries} \\\\
            C & = \\text{# of Cieldalaes Pineapples} \\\\
          \\end{align}
        `)}
        <Typography paragraph>
          our program is
        </Typography>
        {$$(`
          \\begin{array}{ll}
            \\text{minimize}   & \\phantom{+}X +D +M +V +O +C, \\\\
            \\\\
            \\text{subject to} & \\phantom{+}X -D -M -V +O +C = R / 5, \\\\
                               &            -X +D -M +V -O +C = G / 5, \\\\
                               &            -X -D +M +V +O -C = B / 5, \\\\
            \\\\
            \\text{and}        & X, D, M, V, O, C \\geq 0, \\\\
                               & X, D, M, V, O, C \\in \\Bbb{Z} \\\\
          \\end{array}
        `)}
        <Typography paragraph>
          where {$('R, G, B')} is the difference {$('\\text{DesiredColor} - \\text{CurrentColor}')}. This does not take into account clamping, which can be avoided almost always anyways. It gives only the number of fruits required, which is then ordered to hopefully avoid clamping. I did this by repeatedly picking fruits that minimize the distance to {$('\\operatorname{RGB}(127.5, 127.5, 127.5)')} using the <MuiLink href='https://en.wikipedia.org/wiki/Uniform_norm'>uniform norm</MuiLink>.
        </Typography>
        <Typography paragraph>
          The step of determining how many fruits are required can be simplified immensely by dropping the integer constraint. And since the {$('V, O, C')} fruits are “opposites” of the {$('X, D, M')} fruits, we can drop the {$('V, O, C')} variables by removing the nonnegativity constraints on {$('X, D, M')}. This transforms the problem into the standard linear equation
        </Typography>
        {$$(`
          \\begin{pmatrix}
            \\phantom{+}5 &            -5 &             -5 \\\\
                       -5 & \\phantom{+}5 &             -5 \\\\
                       -5 &            -5 &  \\phantom{+}5 \\\\
          \\end{pmatrix}
          \\begin{pmatrix}
            X \\\\ D \\\\ M
          \\end{pmatrix}
          =
          \\begin{pmatrix}
            R \\\\ G \\\\ B
          \\end{pmatrix},
        `)}
        <Typography paragraph>
          with a negative value of {$('X')} corresponding to a positive value of {$('V')}, etc. To turn the solutions into integers, I round them (although some combinations of {$('\\operatorname{ceil}')} and {$('\\operatorname{floor}')} can give better results, and there is no guarantee we can find the optimal solution this way). This algorithm can outperform the first algorithm in situations where the first algorithm would terminate early.
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
          <Typography component='li'>Add the first fruit in {$('F')} to the solution and repeat</Typography>
        </ol>
        <Box mb={2}>
          <Highlight language='typescript'>
            {`
while (true) {
  // Find the best path
  const pathsSorted = computePaths(lookahead).sort((pathA, pathB) =>
    currentColor.addPath(pathA).distanceTo(toColor) - currentColor.addPath(pathB).distanceTo(toColor)
  )
  const bestPath = pathsSorted[0]

  // If no paths get us closer, stop
  if (bestPath.length === 0) {
    return fruits

  // Otherwise, add the first fruit in the path to the list and continue
  } else {
    const bestFruit = bestPath[0]
    fruits.push(bestFruit)
    currentColor = currentColor.add(bestFruit)
    currentDistance = currentColor.distanceTo(toColor)
  }
}
            `.trim()}
          </Highlight>
        </Box>
        <Typography paragraph>
          With a big enough lookahead, the algorithm is able to momentarily step further away from the target color in order to get closer later. The algorithm implemented on the <Link href='/chocobo-color'>Chocobo Color page</Link> is this algorithm with a lookahead of {$('L = 3')}, which specifically admits the strategy of eating 3 fruits to increase/reduce all values by 5. This performs very well.
        </Typography>
        <Typography paragraph>
          Lookahead also allows the algorithm to utilizing clamping, considering cases where the fruits no longer commute. For example, if the current color is Snow White <StainButton stain={stains[1]} className={classes.stain} /> and the target color is Soot Black <StainButton stain={stains[6]} className={classes.stain} />, then we need to decrease the RGB values as much as possible. Without any clamping, this can be done in 110 fruits. With clamping, it’s possible to get as close with 97 fruits instead. It involves feeding a bunch of Xelphatol Apples first to max out the RGB’s red value so that subsequent Xelphatol Apples will lower the average RGB value quicker. Unfortunately, lookaheads with {$('L > 5')} quickly become infeasible, the benefits are small, and situations that can use it are rare.
        </Typography>
        <Box mb={2}>
          <Button variant='contained' onClick={handleClickToggleClamping}>Show/Hide Solutions</Button>
          <Collapse in={showClamping}>
          <TableContainer>
            <Table size='small' className={classes.clampTable}>
              <TableHead>
                <TableRow>
                  <TableCell colSpan={4} align='center'>Without clamping</TableCell>
                  <TableCell colSpan={4} align='center'>With clamping</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {(() => {
                  const rows = []
                  const length = Math.max(MATRIX_SOLUTION.length, DISTANCE_SOLUTION.length)
                  let currentColorMatrix = stains[1].color
                  let currentColorDistance = stains[1].color

                  rows.push(
                    <TableRow key={-1}>
                      <TableCell />
                      <TableCell>{currentColorMatrix.R}</TableCell>
                      <TableCell>{currentColorMatrix.G}</TableCell>
                      <TableCell>{currentColorMatrix.B}</TableCell>
                      <TableCell />
                      <TableCell>{currentColorDistance.R}</TableCell>
                      <TableCell>{currentColorDistance.G}</TableCell>
                      <TableCell>{currentColorDistance.B}</TableCell>
                    </TableRow>
                  )

                  for (let index = 0; index < length; ++index) {
                    const matrixFruit = MATRIX_SOLUTION[index]
                    const distanceFruit = DISTANCE_SOLUTION[index]
                    if (matrixFruit) {
                      currentColorMatrix = currentColorMatrix.add(fruitValues[matrixFruit])
                    }
                    if (distanceFruit) {
                      currentColorDistance = currentColorDistance.add(fruitValues[distanceFruit])
                    }

                    rows.push(
                      <TableRow key={index}>
                        <TableCell align='center'>{matrixFruit && <FruitIcon fruit={matrixFruit} size={0.8} />}</TableCell>
                        <TableCell align='center'>{matrixFruit && currentColorMatrix.R}</TableCell>
                        <TableCell align='center'>{matrixFruit && currentColorMatrix.G}</TableCell>
                        <TableCell align='center'>{matrixFruit && currentColorMatrix.B}</TableCell>
                        <TableCell align='center'>{distanceFruit && <FruitIcon fruit={distanceFruit} size={0.8} />}</TableCell>
                        <TableCell align='center'>{distanceFruit && currentColorDistance.R}</TableCell>
                        <TableCell align='center'>{distanceFruit && currentColorDistance.G}</TableCell>
                        <TableCell align='center'>{distanceFruit && currentColorDistance.B}</TableCell>
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
      </Section>
      <Section title='Error'>
        <Typography paragraph>
          The algorithm can get us pretty close to the desired color, but it’s not always possible to be exact. The two closest possible colors a chocobo can be are Currant Purple <StainButton stain={stains[79]} className={classes.stain} /> and Grape Purple <StainButton stain={stains[81]} className={classes.stain} />. These two have a distance of {$('9.434')}, so if we can guarantee an error of less than {$('9.434 / 2 = 4.717')}, then the desired color will always be the closest color, but this is impossible to guarantee.
        </Typography>
        <Typography paragraph>
          Feeding a fruit will always change the parity of the RGB values, i.e. odd → even or even → odd. If the target color is {$('\\operatorname{RGB}(100, 100, 100)')} with all even values, and the current color is {$('\\operatorname{RGB}(100, 100, 105)')} with 1 odd value, no sequence of fruits can get closer (ignoring clamping). Thus the maximum error is bounded below by {$('5')}, and we cannot guarantee that the closest color is the desired color.
        </Typography>
        <Typography paragraph>
          A possible solution is to instead aim for some color that is near the desired color and far from other nearby colors, maximizing the likelihood that we end up at the desired color. The hope is that our final color ends up inside the <MuiLink href='https://en.wikipedia.org/wiki/Voronoi_diagram'>Voronoi cell</MuiLink> of the desired color, so a sensible target would be the centroid of this region. In 2D, this may look like
        </Typography>
        <Box mb={2} textAlign='center'>
          <img src='/images/chocobo-color/voronoi-diagram.png' className={classes.image} />
        </Box>
        <Typography paragraph>
          This would allow more room for error, but I decided computing these targets would be too much work. As long as the algorithm gets as close to the desired color as possible (ignoring clamping), it’s sufficient.
        </Typography>
      </Section>
      <Section title='Optimality'>
        <Typography paragraph>
          Fortunately, a lookahead of {$('L = 3')} is enough to guarantee that our algorithm terminates with a color as close to the target color as possible (ignoring clamping). By feeding 2 fruits, any individual RGB value can be adjusted by {$('\\pm10')} while leaving the other two values unaffected. This means that the color we end up at cannot have coordinates that differ from the target color’s by more than {$('5')}. The same must be true of the optimal solution.
        </Typography>
        <Typography paragraph>
          Let the solution our algorithm returns be {$('\\operatorname{RGB(r, g, b)}')}. Focusing only on the red component, the optimal solution must have a red component of {$('r-5')}, {$('r')}, or {$('r+5')}. Now we consider the 27 points:
        </Typography>
        <Box mb={2}>
          <TableContainer>
            <Table size='small' className={classes.table}>
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
                  <TableCell component='th' scope='row' rowSpan={3} align='center'>{$('b-5')}</TableCell>
                  <TableCell component='th' scope='row' align='center'>{$('g-5')}</TableCell>
                  <TableCell align='center' className={classes.positive}>{$('(r-5, g-5, b-5)')}</TableCell>
                  <TableCell align='center' className={classes.negative}>{$('(r+0, g-5, b-5)')}</TableCell>
                  <TableCell align='center' className={classes.positive}>{$('(r+5, g-5, b-5)')}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component='th' scope='row' align='center'>{$('g')}</TableCell>
                  <TableCell align='center' className={classes.negative}>{$('(r-5, g+0, b-5)')}</TableCell>
                  <TableCell align='center' className={classes.negative}>{$('(r+0, g+0, b-5)')}</TableCell>
                  <TableCell align='center' className={classes.negative}>{$('(r+5, g+0, b-5)')}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component='th' scope='row' align='center'>{$('g+5')}</TableCell>
                  <TableCell align='center' className={classes.positive}>{$('(r-5, g+5, b-5)')}</TableCell>
                  <TableCell align='center' className={classes.negative}>{$('(r+0, g+5, b-5)')}</TableCell>
                  <TableCell align='center' className={classes.positive}>{$('(r+5, g+5, b-5)')}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component='th' scope='row' rowSpan={3} align='center'>{$('b')}</TableCell>
                  <TableCell component='th' scope='row' align='center'>{$('g-5')}</TableCell>
                  <TableCell align='center' className={classes.negative}>{$('(r-5, g-5, b+0)')}</TableCell>
                  <TableCell align='center' className={classes.negative}>{$('(r+0, g-5, b+0)')}</TableCell>
                  <TableCell align='center' className={classes.negative}>{$('(r+5, g-5, b+0)')}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component='th' scope='row' align='center'>{$('g')}</TableCell>
                  <TableCell align='center' className={classes.negative}>{$('(r-5, g+0, b+0)')}</TableCell>
                  <TableCell align='center' className={classes.positive}>{$('(r+0, g+0, b+0)')}</TableCell>
                  <TableCell align='center' className={classes.negative}>{$('(r+5, g+0, b+0)')}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component='th' scope='row' align='center'>{$('g+5')}</TableCell>
                  <TableCell align='center' className={classes.negative}>{$('(r-5, g+5, b+0)')}</TableCell>
                  <TableCell align='center' className={classes.negative}>{$('(r+0, g+5, b+0)')}</TableCell>
                  <TableCell align='center' className={classes.negative}>{$('(r+5, g+5, b+0)')}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component='th' scope='row' rowSpan={3} align='center'>{$('b+5')}</TableCell>
                  <TableCell component='th' scope='row' align='center'>{$('g-5')}</TableCell>
                  <TableCell align='center' className={classes.positive}>{$('(r-5, g-5, b+5)')}</TableCell>
                  <TableCell align='center' className={classes.negative}>{$('(r+0, g-5, b+5)')}</TableCell>
                  <TableCell align='center' className={classes.positive}>{$('(r+5, g-5, b+5)')}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component='th' scope='row' align='center'>{$('g')}</TableCell>
                  <TableCell align='center' className={classes.negative}>{$('(r-5, g+0, b+5)')}</TableCell>
                  <TableCell align='center' className={classes.negative}>{$('(r+0, g+0, b+5)')}</TableCell>
                  <TableCell align='center' className={classes.negative}>{$('(r+5, g+0, b+5)')}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component='th' scope='row' align='center'>{$('g+5')}</TableCell>
                  <TableCell align='center' className={classes.positive}>{$('(r-5, g+5, b+5)')}</TableCell>
                  <TableCell align='center' className={classes.negative}>{$('(r+0, g+5, b+5)')}</TableCell>
                  <TableCell align='center' className={classes.positive}>{$('(r+5, g+5, b+5)')}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        <Typography paragraph>
          One of these points is the optimal solution, and all the points marked as red are impossible to reach due to parity. Starting at {$('(r, g, b)')}, we must show that our algorithm considers all the green points with a lookahead of {$('L = 3')}. By symmetry, there are only 3 cases needed to be checked.
        </Typography>
        <Box mb={2}>
          <TableContainer>
            <Table className={classes.table}>
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
                  <TableCell align='center'><FruitIcon fruit={Fruit.XelphatolApple} /><FruitIcon fruit={Fruit.DomanPlum} /><FruitIcon fruit={Fruit.MamookPear} /></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align='center'>{$('(r+5, g+5, b-5)')}</TableCell>
                  <TableCell align='center'><FruitIcon fruit={Fruit.CieldalaesPineapple} /></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        <Typography paragraph>
          Thus the algorithm is optimal.
        </Typography>
      </Section>
    </Page>
  )
}

About.getInitialProps = async () => ({
  namespacesRequired: ['common', 'chocobo-color']
})

export default About
