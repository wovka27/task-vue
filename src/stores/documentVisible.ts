import {defineStore} from "pinia";
import {computed, ref} from "vue";

type VisibleType = typeof document.visibilityState
export const useDocumentVisible = defineStore('documentVisible', () => {
  const data = ref<VisibleType>()
  const type = computed<boolean>(() => data.value === 'visible')
  const setType = (type: VisibleType) => {
    data.value = type
  }

  return {type, setType}
})