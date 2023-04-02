/**
 * Убирать или добавлять вокруг значения тега "{}"
 *
 * @param value значение тега
 * @param action str - убирать "{}" ,  parse - добавлять "{}"
 * @return string
 */
export const parseOrStringifyTagValue = (action: 'str' | 'parse', value: string) => {
  switch (action) {
    case 'parse':
      return `{${value}}`
    case 'str':
      return value.replace(/^{|}$/g, '')
    default:
      return value
  }
}
