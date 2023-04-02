import type { ComputedRef, Ref } from 'vue'
import type { ITag, Void } from '@/types'

export interface ITagStore {
  tags: ComputedRef<Ref<ITag[]>>
  addTag: (tag: ITag) => void
  $reset: Void
  deleteTag: (value: string) => void
  selectTag: ITagStore['deleteTag']
  selectedTag: ComputedRef<ITag | undefined>
}