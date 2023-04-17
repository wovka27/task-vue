import { defineStore } from 'pinia'
import { computed, type Ref, ref } from 'vue'
import { getTasks, setTasks } from '@/services/storage'
import type { ITask } from '@/types'
import type { ITasksStore } from '@/types/stores'
import { deleteItem } from '@/utils'

export const useTasksStore = defineStore('tasks', (): ITasksStore => {
  const data: Ref<ITask[]> = ref(getTasks())
  const tasks: ITasksStore['tasks'] = computed(() => data)

  const addTask: ITasksStore['addTask'] = (task) => {
    data.value.push({ ...task, id: Date.now() })
    setTasks(data.value)
  }

  const deleteTask: ITasksStore['deleteTask'] = (id) => {
    if (!id) return
    deleteItem(data.value, (item) => item.id === +id)
    setTasks(data.value)
  }

  const $reset: ITasksStore['$reset'] = () => {
    data.value = []
  }

  return { tasks, addTask, $reset, deleteTask }
})
