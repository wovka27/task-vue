<script lang="ts" setup>
import { ref } from 'vue'
import { useTagsStore, useTasksStore } from '@/stores'

const {addTask} = useTasksStore()
const {selectTag} = useTagsStore()

const inputValue = ref<string>()
const submit = () => {

}
</script>

<template>
  <el-form class='TaskForm' @submit.prevent="submit">
    <div class='TaskForm__inner-wrapper'>
      <el-input class='TaskForm__input' v-model="inputValue" resize="none" :rows="10" type='textarea' />
      <el-button type="success" native-type="submit">Добавить</el-button>
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
    gap: 20px;
  }
}
</style>
