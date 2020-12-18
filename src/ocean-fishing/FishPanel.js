import React from 'react'
import PropTypes from 'prop-types'
import FishTable from './FishTable'

const REGIONS = {
  G: ['Outer Galadion Bay', 'Galadion Spectral Current'],
  S: ['The Southern Strait of Merlthor', 'Southern Merlthor Spectral Current'],
  N: ['The Northern Strait of Merlthor', 'Northern Merlthor Spectral Current'],
  R: ['Open Rhotano Sea', 'Rhotano Spectral Current'],
  C: ['Cieldalaes Margin', 'Cieldalaes Spectral Current'],
  B: ['Open Bloodbrine Sea', 'Bloodbrine Spectral Current'],
  T: ['Outer Rothlyt Sound', 'Rothlyt Spectral Current']
}

function FishPanel ({ children, tab, index, stop, checklist, setChecklist }) {
  return (
    <div hidden={tab !== index}>
      {tab === index &&
        <FishTable
          regions={REGIONS[stop[0]]}
          time={stop[1]}
          checklist={checklist}
          setChecklist={setChecklist}
        />}
    </div>
  )
}

FishPanel.propTypes = {
  tab: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  stop: PropTypes.string.isRequired,
  checkList: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  setChecklist: PropTypes.func.isRequired
}

export default FishPanel
