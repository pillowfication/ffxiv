export function randomElement<T> (...arrays: T[][]) {
  if (arrays.length === 0) {
    return undefined
  } else if (arrays.length === 1) {
    return arrays[0][Math.floor(Math.random() * arrays[0].length)]
  } else {
    const totalElements = arrays.reduce((acc, curr) => acc + curr.length, 0)
    const index = Math.floor(Math.random() * totalElements)

    let currIndex = 0
    for (const array of arrays) {
      currIndex += array.length
      if (currIndex > index) {
        return array[array.length + index - currIndex]
      }
    }
  }
}

export function upperFirst (string: string) {
  return string && string[0].toUpperCase() + string.slice(1).toLowerCase()
}
