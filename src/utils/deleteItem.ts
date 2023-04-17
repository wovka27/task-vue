import type { ITask } from '@/types'

export const deleteItem = <T>(data: ITask[], cb: (item) => boolean) => data.splice(data.findIndex(cb), 1)
