import React, { Component } from 'react'
import propTypes from 'prop-types'
import cn from 'classnames'
import { LINES, getSuggestion } from './solve'

import zf from '../foundation.scss'
import styles from './MiniCactpot.scss'

class MiniCactpot extends Component {
  constructor (props) {
    super(props)

    this.state = {
      state: Array(9).fill(null),
      suggestion: null,
      error: { type: 'EMPTY' }
    }

    this.handleOnInputDigit = this.handleOnInputDigit.bind(this)
    this.handleReset = this.handleReset.bind(this)
  }

  componentDidMount () {
    document.title = 'Mini Cactpot'
  }

  checkErrors (state) {
    let enteredCount = 0
    const seenValues = {}
    const duplicateCells = []

    for (let i = 0; i < 9; ++i) {
      const value = state[i]
      if (value !== null) {
        ++enteredCount
        const seenAt = seenValues[value]
        if (seenAt != null) {
          duplicateCells.push(seenAt)
          duplicateCells.push(i)
          seenValues[value] = true
        } else if (seenAt !== undefined) {
          duplicateCells.push(i)
        } else {
          seenValues[value] = i
        }
      }
    }

    if (enteredCount === 0) {
      return { type: 'EMPTY' }
    }
    if (enteredCount > 4) {
      return { type: 'TOO MANY' }
    }
    if (duplicateCells.length > 0) {
      return { type: 'DUPLICATES', cells: duplicateCells }
    }
    return null
  }

  handleOnInputDigit (cell, digit) {
    const newState = this.state.state.slice()
    newState[cell] = digit
    const error = this.checkErrors(newState)
    if (error) {
      this.setState({
        state: newState,
        suggestion: null,
        error: error
      })
    } else {
      this.setState({
        state: newState,
        suggestion: getSuggestion(newState),
        error: null
      })
    }
  }

  handleReset () {
    this.setState({
      state: Array(9).fill(null),
      suggestion: null,
      error: { type: 'EMPTY' }
    })
  }

  render () {
    const { state, suggestion, error } = this.state

    return (
      <>
        <h1>Mini Cactpot</h1>
        <div className={cn(zf.gridX, zf.gridPaddingX)}>
          <div className={cn(zf.cell, zf.mediumShrink)}>
            <Scratchcard
              state={state}
              suggestion={suggestion}
              error={error}
              onInputDigit={this.handleOnInputDigit}
            />
            <div className={zf.buttonGroup}>
              <button type='button' className={cn(zf.button, zf.alert)} onClick={this.handleReset}>Reset</button>
            </div>
          </div>
          <div className={cn(zf.cell, zf.mediumAuto)}>
            {(() => {
              if (error) {
                switch (error.type) {
                  case 'EMPTY':
                    return <p>Click on a square to enter a digit.</p>
                  case 'TOO MANY':
                    return (
                      <>
                        <strong>Error</strong>
                        <p>There can only be at most 4 digits in the grid.</p>
                      </>
                    )
                  case 'DUPLICATES':
                    return (
                      <>
                        <strong>Error</strong>
                        <p>There are duplicate digits in the grid.</p>
                      </>
                    )
                }
              } else {
                switch (suggestion.type) {
                  case 'CELL':
                    return (
                      <>
                        <strong>Expected Value:</strong> {suggestion.maxCellEV | 0}
                        <p>Reveal a highlighted square.</p>
                      </>
                    )
                  case 'LINE':
                    return (
                      <>
                        <strong>Expected Value:</strong> {suggestion.maxLineEV | 0}
                        <p>Select a highlighted line.</p>
                      </>
                    )
                }
              }
            })()}
          </div>
        </div>
      </>
    )
  }
}

class Scratchcard extends Component {
  constructor (props) {
    super(props)

    this.handleOnInputDigit0 = this.handleOnInputDigit.bind(this, 0)
    this.handleOnInputDigit1 = this.handleOnInputDigit.bind(this, 1)
    this.handleOnInputDigit2 = this.handleOnInputDigit.bind(this, 2)
    this.handleOnInputDigit3 = this.handleOnInputDigit.bind(this, 3)
    this.handleOnInputDigit4 = this.handleOnInputDigit.bind(this, 4)
    this.handleOnInputDigit5 = this.handleOnInputDigit.bind(this, 5)
    this.handleOnInputDigit6 = this.handleOnInputDigit.bind(this, 6)
    this.handleOnInputDigit7 = this.handleOnInputDigit.bind(this, 7)
    this.handleOnInputDigit8 = this.handleOnInputDigit.bind(this, 8)
    this.noop = () => {}
  }

  handleOnInputDigit (cell, event) {
    // Support 'Clear', 'Cut', 'EraseEof'?
    if (event.key === 'Backspace' || event.key === 'Delete') {
      this.props.onInputDigit(cell, null)
    } else {
      const digit = Number(event.key)
      if (digit && digit >= 1 && digit <= 9) {
        this.props.onInputDigit(cell, digit)
      }
    }
  }

  render () {
    const { state, suggestion, error } = this.props
    const handleOnChange = this.noop

    const errorCells = {}
    if (error && error.type === 'DUPLICATES') {
      for (const cell of error.cells) {
        errorCells[cell] = true
      }
    }

    const suggestCells = {}
    if (suggestion) {
      switch (suggestion.type) {
        case 'CELL':
          for (const cell of suggestion.maxCellLocations) {
            suggestCells[cell] = true
          }
          break
        case 'LINE':
          for (const lineIndex of suggestion.maxLineIds) {
            for (const cell of LINES[lineIndex]) {
              suggestCells[cell] = true
            }
          }
          break
      }
    }

    return (
      <div className={styles.scratchcard}>
        <div>
          <div className={cn(styles.cell, errorCells[0] && styles.error, suggestCells[0] && styles.suggest)}>
            <input type='text' onChange={handleOnChange} onKeyDown={this.handleOnInputDigit0} value={state[0] || ''} />
          </div>
          <div className={cn(styles.cell, errorCells[1] && styles.error, suggestCells[1] && styles.suggest)}>
            <input type='text' onChange={handleOnChange} onKeyDown={this.handleOnInputDigit1} value={state[1] || ''} />
          </div>
          <div className={cn(styles.cell, errorCells[2] && styles.error, suggestCells[2] && styles.suggest)}>
            <input type='text' onChange={handleOnChange} onKeyDown={this.handleOnInputDigit2} value={state[2] || ''} />
          </div>
        </div>
        <div>
          <div className={cn(styles.cell, errorCells[3] && styles.error, suggestCells[3] && styles.suggest)}>
            <input type='text' onChange={handleOnChange} onKeyDown={this.handleOnInputDigit3} value={state[3] || ''} />
          </div>
          <div className={cn(styles.cell, errorCells[4] && styles.error, suggestCells[4] && styles.suggest)}>
            <input type='text' onChange={handleOnChange} onKeyDown={this.handleOnInputDigit4} value={state[4] || ''} />
          </div>
          <div className={cn(styles.cell, errorCells[5] && styles.error, suggestCells[5] && styles.suggest)}>
            <input type='text' onChange={handleOnChange} onKeyDown={this.handleOnInputDigit5} value={state[5] || ''} />
          </div>
        </div>
        <div>
          <div className={cn(styles.cell, errorCells[6] && styles.error, suggestCells[6] && styles.suggest)}>
            <input type='text' onChange={handleOnChange} onKeyDown={this.handleOnInputDigit6} value={state[6] || ''} />
          </div>
          <div className={cn(styles.cell, errorCells[7] && styles.error, suggestCells[7] && styles.suggest)}>
            <input type='text' onChange={handleOnChange} onKeyDown={this.handleOnInputDigit7} value={state[7] || ''} />
          </div>
          <div className={cn(styles.cell, errorCells[8] && styles.error, suggestCells[8] && styles.suggest)}>
            <input type='text' onChange={handleOnChange} onKeyDown={this.handleOnInputDigit8} value={state[8] || ''} />
          </div>
        </div>
      </div>
    )
  }
}

Scratchcard.propTypes = {
  onInputDigit: propTypes.func.isRequired,
  state: propTypes.array.isRequired,
  suggestion: propTypes.shape({ type: propTypes.string.isRequired }),
  error: propTypes.shape({ type: propTypes.string.isRequired })
}

export default MiniCactpot
