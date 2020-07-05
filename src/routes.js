import React from 'react'

const routes = [{
  title: 'High or Low',
  path: '/high-or-low',
  component: React.lazy(() => import('./high-or-low/HighOrLow.jsx'))
}, {
  title: 'Mini Cactpot',
  path: '/mini-cactpot',
  component: React.lazy(() => import('./mini-cactpot/MiniCactpot.jsx'))
}, {
  title: 'Ocean Fishing',
  path: '/ocean-fishing',
  component: React.lazy(() => import('./ocean-fishing/OceanFishing.jsx'))
}]

export default routes
