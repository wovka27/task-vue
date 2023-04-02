import { getNotification } from '@/utils/getNotification'

export const copy = async (value: string) => {
  try {
    await navigator.clipboard.writeText(value)
    getNotification('Успешно скопировано')
  } catch (e) {
    getNotification('Не удалось скопировать')
  }
}