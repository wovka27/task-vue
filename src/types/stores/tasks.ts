import type { ComputedRef, Ref } from 'vue'
import type { ITask } from '@/types'

export interface ITasksStore {
  tasks: ComputedRef<Ref<ITask[]>>
  addTask: (task: ITask) => void
  deleteTask: (id: number) => void
  $reset: () => void
}