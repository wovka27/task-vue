export const getDate = (value: 'weekday' | 'today'): string | null => {
  switch (value) {
    case 'today':
      return new Intl.DateTimeFormat('ru').format()
    case 'weekday':
      return new Intl.DateTimeFormat('ru', { weekday: 'long' }).format()
    default:
      return null
  }
}
