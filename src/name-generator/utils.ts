export function randomElement<T> (array: T[]) {
  return array[Math.floor(Math.random() * array.length)]
}
