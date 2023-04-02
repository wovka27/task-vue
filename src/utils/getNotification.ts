import { h } from 'vue'

// @ts-ignore
export const getNotification = (text: string) => ElNotification({
  title: 'Опаньки',
  message: h('i', { style: 'color: teal' }, text),
  position: 'bottom-left',
})