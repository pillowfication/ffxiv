class Vector {
  x: number
  y: number
  z: number

  constructor (x: number, y: number, z: number) {
    this.x = x
    this.y = y
    this.z = z
  }

  dist (v: Vector) {
    return Math.hypot(this.x - v.x, this.y - v.y, this.z - v.z)
  }
}

const RESOLUTION = 100
const VECTORS = [
  new Vector( 0,  0,  0),
  new Vector(-1, -1, -1),
  new Vector(-1, -1,  1),
  new Vector(-1,  1, -1),
  new Vector(-1,  1,  1),
  new Vector( 1, -1, -1),
  new Vector( 1, -1,  1),
  new Vector( 1,  1, -1),
  new Vector( 1,  1,  1)
]

let errorBound = 0
let errorVec = null

for (let i = 0; i <= RESOLUTION; ++i) {
  const x = i * 2 / RESOLUTION - 1
  for (let j = 0; j <= RESOLUTION; ++j) {
    const y = j * 2 / RESOLUTION - 1
    for (let k = 0; k <= RESOLUTION; ++k) {
      const z = k * 2 / RESOLUTION - 1
      const vec = new Vector(x, y, z)
      const error = Math.min(...VECTORS.map(v => v.dist(vec)))
      if (error > errorBound) {
        errorBound = error
        errorVec = vec
      }
    }
  }
}

console.log(errorBound * 5, new Vector(errorVec.x * 5, errorVec.y * 5, errorVec.z * 5))

export {}
