import React from 'react'

const routes = {
  highOrLow: {
    title: 'High or Low',
    path: '/high-or-low',
    component: React.lazy(() => import('./high-or-low/HighOrLow.jsx'))
  },
  miniCactpot: {
    title: 'Mini Cactpot',
    path: '/mini-cactpot',
    component: React.lazy(() => import('./mini-cactpot/MiniCactpot.jsx'))
  },
  oceanFishing: {
    title: 'Ocean Fishing',
    path: '/ocean-fishing',
    component: React.lazy(() => import('./ocean-fishing/OceanFishing.jsx'))
  },
  weather: {
    title: 'Skywatcher',
    path: '/skywatcher',
    component: React.lazy(() => import('./skywatcher/Skywatcher.jsx'))
  }
}

export const routesArray = Object.keys(routes)
  .sort((a, b) => a.localeCompare(b))
  .map(key => routes[key])

export default routes
