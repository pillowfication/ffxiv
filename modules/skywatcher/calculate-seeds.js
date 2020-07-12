const fs = require('fs')
const path = require('path')

const calculateForecastTarget = (n) => {
  const unixtime = Math.floor(n / 1000)
  const bell = unixtime / 175
  const increment = ((bell + 8) - (bell % 8)) % 24
  let totalDays = unixtime / 4200
  totalDays = (totalDays << 32) >>> 0
  const calcBase = (totalDays * 0x64) + increment
  const step1 = ((calcBase << 0xB) ^ calcBase) >>> 0
  const step2 = ((step1 >>> 8) ^ step1) >>> 0
  return step2 % 0x64
}

function findSeedFor (n) {
  for (let i = 0; ; i += 1000) {
    if (calculateForecastTarget(i) === n) {
      return i / 1000
    }
  }
}

const seeds = []
for (let i = 0; i < 100; ++i) {
  console.log(i)
  seeds.push(findSeedFor(i))
}

fs.writeFileSync(path.resolve(__dirname, './seeds.json'), JSON.stringify(seeds))
