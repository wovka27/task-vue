import { defineStore } from 'pinia'
import { computed, type Ref, ref } from 'vue'
import type { ITag } from '@/types'
import { getTags, setTags } from '@/services/storage'
import type { ITagStore } from '@/types/stores'

export const useTagsStore = defineStore('tags', (): ITagStore => {
  const data: Ref<ITag[]> = ref(getTags())
  const selectedData: Ref<ITag | undefined> = ref()
  const tags: ITagStore['tags'] = computed(() => data)
  const selectedTag: ITagStore['selectedTag'] = computed(() => selectedData)

  const addTag: ITagStore['addTag'] = (tag: ITag) => {
    data.value.unshift(tag)
    setTags(data.value)
  }

  const getSelectedData = () => {
    selectedData.value = data.value.find((item) => item.selected)
  }

  const deleteTag: ITagStore['deleteTag'] = (value) => {
    data.value.splice(
      data.value.findIndex((item) => item.label === value),
      1
    )
    setTags(data.value)
    getSelectedData()
  }

  const $reset: ITagStore['$reset'] = () => {
    data.value = []
  }

  const clearSelectedTag: ITagStore['clearSelectedTag'] = () => {
    selectedData.value = undefined
  }

  const selectTag: ITagStore['selectTag'] = (value) => {
    data.value.forEach((item) => {
      if (item.label === value) {
        item.selected = true
        getSelectedData()
      } else {
        item.selected = false
      }
    })
  }

  return { tags, addTag, $reset, deleteTag, selectTag, selectedTag, getSelectedData, clearSelectedTag }
})
