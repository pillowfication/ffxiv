import React, { Component } from 'react'
import cn from 'classnames'

import MathJax from '../MathJax.jsx'
import zf from '../foundation.scss'
import styles from './HighOrLow.scss'

class HighOrLow extends Component {
  constructor (props) {
    super(props)

    this.state = {
      tb1: null,
      tb2: null,
      me: null
    }

    this.handleOnInputTb1 = this.handleOnInputDigit.bind(this, 'tb1')
    this.handleOnInputTb2 = this.handleOnInputDigit.bind(this, 'tb2')
    this.handleOnInputMe = this.handleOnInputDigit.bind(this, 'me')
    this.handleReset = this.handleReset.bind(this)
    this.noop = () => {}
  }

  componentDidMount () {
    document.title = 'High or Low'
  }

  handleOnInputDigit (stateKey, event) {
    const digit = this.getDigitFromEvent(event)
    if (digit !== undefined) {
      this.setState({ [stateKey]: digit })
    }
  }

  handleReset () {
    this.setState({
      tb1: null,
      tb2: null,
      me: null
    })
  }

  getDigitFromEvent (event) {
    // Support 'Clear', 'Cut', 'EraseEof'?
    if (event.key === 'Backspace' || event.key === 'Delete') {
      return null
    } else {
      const digit = Number(event.key)
      if (digit >= 1 && digit <= 9) {
        return digit
      }
    }
  }

  render () {
    const { tb1, tb2, me } = this.state
    const handleOnChange = this.noop

    const tb1Error = tb1 && (tb1 === tb2 || tb1 === me)
    const tb2Error = tb2 && (tb2 === tb1 || tb2 === me)
    const meError = me && (me === tb1 || me === tb2)

    let complete = false
    let tbEv, meEv
    if (tb1 && tb2 && me && !tb1Error && !tb2Error && !meError) {
      complete = true
      tbEv = 7 * (tb1 + tb2)
      meEv = 5 * me + 45
    }

    return (
      <>
        <h1>High or Low</h1>
        <div className={cn(styles.container, zf.tableScroll)}>
          <div className={cn(styles.card, tb1Error && styles.error)}>
            <input type='text' onChange={handleOnChange} onKeyDown={this.handleOnInputTb1} value={tb1 || ''} />
          </div>
          <div className={cn(styles.card, tb2Error && styles.error)}>
            <input type='text' onChange={handleOnChange} onKeyDown={this.handleOnInputTb2} value={tb2 || ''} />
          </div>
          <div className={cn(styles.card, styles.hidden)} />
          <br />
          <div className={cn(styles.card, meError && styles.error)}>
            <input type='text' onChange={handleOnChange} onKeyDown={this.handleOnInputMe} value={me || ''} />
          </div>
          <div className={cn(styles.card, styles.hidden)} />
          <div className={cn(styles.card, styles.hidden)} />
        </div>
        <div className={styles.result}>
          <p>
            {complete
              ? <>You are {meEv > tbEv ? <b>High</b> : meEv < tbEv ? <b>Low</b> : <><b>High</b> or <b>Low</b></>}</>
              : 'Input cards'}
          </p>
        </div>

        <div className={zf.buttonGroup}>
          <button type='button' className={cn(zf.button, zf.alert)} onClick={this.handleReset}>Reset</button>
        </div>
        <div className={cn(zf.gridX, zf.gridPaddingX)}>
          <div className={zf.cell}>
            {(tb1Error || tb2Error || meError) &&
              <><strong>Error</strong><p>Cannot have two of the same number.</p></>}
          </div>
        </div>
        <br />

        <h3>About</h3>
        <p>The deck contains 9 cards valued 1 through 9. You and Tista-Bie are dealt 3 cards each, with 2 of hers and 1 of yours revealed. You guess if the sum of your 3 cards is higher or lower than the sum of her 3 cards. You win if you are correct.</p>
        <p>There is a simple way to determine if your sum is more likely to be higher or lower. Calculate the <strong>scores</strong> of you and Tista-Bie according to the following formula:</p>
        <MathJax $$={`
          \\begin{align}
            \\text{Your Score} & = (\\text{Your Card}) \\times 5 + 45, \\\\
            \\text{TB’s Score} & = (\\text{TB’s Cards}) \\times 7.
          \\end{align}`}
        />
        <p>Then make your guess based on if your score is higher or lower than Tista-Bie’s score.</p>
        <p>For example, if your card is <MathJax $='7' />, then your score is <MathJax $='7 \times 5 + 45 = 80' />.<br />If Tista-Bie’s cards are <MathJax $='4' /> and <MathJax $='8' />, then her score is <MathJax $='(4 + 8) \times 7 = 84' />.</p>
        <p>In this scenario, you should guess <b>Low</b>.</p>
      </>
    )
  }
}

export default HighOrLow
