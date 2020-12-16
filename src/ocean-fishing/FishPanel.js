import React from 'react'
import PropTypes from 'prop-types'
import FishTable from './FishTable'

function FishPanel ({ children, tab, index, stop, checklist, setChecklist }) {
  return (
    <div hidden={tab !== index}>
      {tab === index && (() => {
        let regions
        switch (stop[0]) {
          case 'G': regions = ['Outer Galadion Bay', 'Galadion Spectral Current']; break
          case 'S': regions = ['The Southern Strait of Merlthor', 'Southern Merlthor Spectral Current']; break
          case 'N': regions = ['The Northern Strait of Merlthor', 'Northern Merlthor Spectral Current']; break
          case 'R': regions = ['Open Rhotano Sea', 'Rhotano Spectral Current']; break
          case 'C': regions = ['Cieldalaes Margin', 'Cieldalaes Spectral Current']; break
          case 'B': regions = ['Open Bloodbrine Sea', 'Bloodbrine Spectral Current']; break
          case 'T': regions = ['Outer Rothlyt Sound', 'Rothlyt Spectral Current']; break
        }
        return <FishTable regions={regions} time={stop[1]} checklist={checklist} setChecklist={setChecklist} />
      })()}
    </div>
  )
}

FishPanel.propTypes = {
  tab: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  stop: PropTypes.string.isRequired
}

export default FishPanel
