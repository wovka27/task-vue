import { defineStore } from 'pinia'
import { computed, type Ref, ref } from 'vue'
import { getTasks, setTasks } from '@/services/storage'
import type { ITask } from '@/types'
import type { ITasksStore } from '@/types/stores'

export const useTasksStore = defineStore('tasks', (): ITasksStore => {
  const data: Ref<ITask[]> = ref(getTasks())
  const tasks: ITasksStore['tasks'] = computed(() => data)

  const addTask: ITasksStore['addTask'] = (task) => {
    data.value.unshift(task)
    setTasks(data.value)
  }

  const $reset: ITasksStore['$reset'] = () => {
    data.value = []
  }

  return { tasks, addTask, $reset }
})
