import roegadynDictionary from '../data/roegadyn-dictionary.json'
import en from '../locales/en.json'
import de from '../locales/de.json'
import fr from '../locales/fr.json'
import ja from '../locales/ja.json'
const LOCALES = { en, de, fr, ja }

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

export function upperFirst (string?: string) {
  if (!string) return ''
  string = string.replace(/[^a-z'-]/ig, '')
  return string[0].toUpperCase() + string.slice(1).toLowerCase()
}

export function formatName (forename: string, surname: string) {
  return (upperFirst(forename) + ' ' + upperFirst(surname)).trim()
}

export function conjugateRoegadyn (word: string, grammar: 'A' | 'N') {
  word = upperFirst(word.replace(/\s+/g, ''))
  const entry = roegadynDictionary[word]

  // If this word does not appear in the dictionary, leave it alone
  if (!entry) {
    return word
  }

  // If this word has the conjugation listed, use it
  if (entry.derivatives && entry.derivatives[grammar]) {
    return entry.derivatives[grammar]
  }

  // If this word is already the requested grammar, leave it alone
  if (entry.grammar === grammar || (entry.grammar === 'AN')) {
    return word
  }

  // Use the N -> A rule
  if (entry.grammar === 'N' && grammar === 'A') {
    return word + 'i'
  }

  // Use the V -> N rule
  if (entry.grammar === 'V' && grammar === 'N') {
    return word + 'a'
  }

  // Use the V -> A rule
  if (entry.grammar === 'V' && grammar === 'A') {
    return word + 'n'
  }

  // Do not know how to conjugate this word or grammar
  return word
}

export function combineRoegadyn (...words: string[]) {
  return upperFirst(
    words.map((word, index) => {
      if (index === 0) return word

      const previousWord = words[index - 1]
      if (word.charAt(0).toLowerCase() === previousWord.charAt(previousWord.length - 1)) {
        return word.slice(1)
      } else {
        return word
      }
    }).join('')
  )
}

export function translate (type: 'race' | 'clan' | 'gender', id: string, locale: string = 'en') {
  return (LOCALES[locale] && LOCALES[locale][type][id]) || `{${type}.${id}}`
}
