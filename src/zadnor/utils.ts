export function formatMonster (label: string, locale: string): string {
  // TODO: weird bracket stuffs in German
  switch (locale) {
    case 'en':
    case 'de':
    case 'cn': // For fallback
    case 'ko': // For fallback
      return label.split(' ').map(word => {
        if (['of', 'des'].includes(word)) {
          return word
        } else {
          return word[0].toUpperCase() + word.slice(1)
        }
      }).join(' ')
    case 'fr':
      return label[0].toUpperCase() + label.slice(1)
    default:
      return label
  }
}
