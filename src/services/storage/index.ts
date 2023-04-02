import type { ITag, ITask } from '@/types'

type SetDataType = <T>(key: DataEnum, value: T) => void

enum DataEnum {
  TAGS = 'tags',
  TASKS = 'tasks'
}

const getData = <T>(key: DataEnum) => {
  const data = localStorage.getItem(key)
  return data ? (JSON.parse(data) as T[]) : ([] as T[])
}
const setData: SetDataType = (key, value) => localStorage.setItem(key, JSON.stringify(value))

export const getTags = () => getData<ITag>(DataEnum.TAGS)
export const setTags = (tags: ITag[]) => setData(DataEnum.TAGS, tags)

export const getTasks = () => getData<ITask>(DataEnum.TASKS)
export const setTasks = (tasks: ITask[]) => setData(DataEnum.TASKS, tasks)
