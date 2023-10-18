export const getDate = (): string => {
  const res = new Intl.DateTimeFormat('ru', { weekday: 'long' }).format()
  return res.charAt(0).toUpperCase() + res.slice(1)
}