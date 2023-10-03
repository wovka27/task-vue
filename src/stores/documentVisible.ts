import {defineStore} from "pinia";
import {computed, ref} from "vue";

type VisibleType = 'visible' | 'hidden'
export const useDocumentVisible = defineStore('documentVisible', () => {
  const data = ref<VisibleType>()
  const type = computed<boolean>(() => data.value === 'visible')
  const setType = (type: VisibleType) => {
    console.log(type)
    data.value = type
  }

  return {type, setType}
})