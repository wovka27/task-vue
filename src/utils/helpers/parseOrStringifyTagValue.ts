/**
 * Убирать или добавлять вокруг значения тега "{}"
 *
 * @param value значение тега
 * @param action str - убирать "{}", parse - добавлять "{}"
 * @return string
 */
export const parseOrStringifyTagValue = (action: 'str' | 'parse', value: string) => new Map([['parse', `{${value}}`], ['str', value.replace(/^{|}$/g, '')]]).get(action) || value
