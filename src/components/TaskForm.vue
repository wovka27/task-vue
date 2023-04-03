<script lang="ts" setup>
import { reactive, ref, watch } from 'vue'
import { useTagsStore, useTasksStore } from '@/stores'
import type { FormInstance, FormRules } from 'element-plus'

const { addTask } = useTasksStore()
const { selectedTag, selectTag, clearSelectedTag } = useTagsStore()

const inputValue = ref<string>(selectedTag.value?.value || '')
const formRef = ref<FormInstance>()
const form = reactive({
  input: inputValue
})
const rules = reactive<FormRules>({
  input: [{ required: true, message: 'Хули не заполнил?' }]
})
const submit = async (formRef: FormInstance | undefined) => {
  addTask({
    tag: selectedTag.value?.value ?? '',
    value: form.input.split(' ').slice(1, form.input.length).join(' ')
  })
  form.input = ''
  clearSelectedTag()
}

const regExp = /(?<=\{)(\S+)(?=\})/gm

watch(inputValue, (value) => {
  const matches = value.match(regExp)
  matches && selectTag(matches[0])
})

watch(selectedTag, (value) => {
  if (value) {
    if (!inputValue.value.match(regExp)) {
      inputValue.value = `${value.value} ${inputValue.value}`
    } else {
      inputValue.value = inputValue.value.replace(regExp, value?.label || '')
    }
  }
})
</script>

<template>
  <el-form :rules="rules" :model="form" class="TaskForm" @submit.prevent="submit(formRef)">
    <div class="TaskForm__inner-wrapper">
      <el-form-item required prop="input">
        <el-input class="TaskForm__input" v-model="form.input" resize="none" :rows="5" type="textarea" />
      </el-form-item>
      <el-button :disabled='!form.input.length' type="success" native-type="submit">Добавить</el-button>
    </div>
  </el-form>
</template>

<style lang="scss">
.TaskForm {
  @include absolute-full;
  padding: 10px;
  height: 100%;
  &__inner-wrapper {
    @include shadow;
    height: 100%;
    border-radius: 8px;
    background-color: #f5f5f5;
    display: flex;
    padding: 20px;
    flex-direction: column;
  }
}
</style>
