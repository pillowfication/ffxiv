// Sun rays

const delta = 0.22
const r = 11
const R = 15
function ct (theta, rho, cx = 0, cy = 0) {
  return `${Math.round((cx + rho * Math.cos(theta)) * 100) / 100} ${Math.round((cy + rho * Math.sin(theta)) * 100) / 100}`
}
for (let i = 0; i < 8; ++i) {
  const theta = i * Math.PI / 4 + Math.PI / 8
  console.log(`<path d='M ${ct(theta - delta, r, 16, 16)} L ${ct(theta, R, 16, 16)} L ${ct(theta + delta, r, 16, 16)} Z' stroke='black' fill='yellow' />`)
}
