import React from 'react'
import Typography from '@material-ui/core/Typography'
import Section from '../Section'
import { $, $$ } from '../MathJax'
import { useTranslation } from '../i18n'

const About = () => {
  const { t } = useTranslation('high-or-low')

  return (
    <Section title={t('about')}>
      <Typography paragraph>
        The deck contains 9 cards valued 1 through 9. You and Tista-Bie are dealt 3 cards each, with 2 of hers and 1 of yours revealed. You guess if the sum of your 3 cards is higher or lower than the sum of her 3 cards. You win if you are correct.
      </Typography>
      <Typography paragraph>
        There is a simple way to determine if your sum is more likely to be higher or lower. Calculate the <strong>scores</strong> of you and Tista-Bie according to the following formula:
      </Typography>
      {$$(`
        \\begin{align}
          \\text{Your Score} & = (\\text{Your Card}) \\times 5 + 45, \\\\
          \\text{TB’s Score} & = (\\text{TB’s Cards}) \\times 7.
        \\end{align}
      `)}
      <Typography paragraph>
        Then make your guess based on if your score is higher or lower than Tista-Bie’s score.
      </Typography>
      <Typography paragraph>
        For example, if your card is {$('7')}, then your score is {$('7 \\times 5 + 45 = 80')}.
        <br />
        If Tista-Bie’s cards are {$('4')} and {$('8')}, then her score is {$('(4 + 8) \\times 7 = 84')}.
      </Typography>
      <Typography paragraph>
        In this scenario, you should guess <b>Low</b>.
      </Typography>
    </Section>
  )
}

export default About
