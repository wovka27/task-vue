<script lang="ts" setup>
import {computed, ref, watch} from 'vue'
import { useTagsStore, useTasksStore } from '@/stores'
import type { ITask } from '@/types'
import { setTasks } from '@/services/storage'
import {ElInput} from "element-plus";

const props = defineProps<{ task: ITask }>()
const emit = defineEmits(['update:tagValue', 'update:taskValue'])

const { tags } = useTagsStore()
const { tasks } = useTasksStore()
const isChageText = ref<boolean>(false)
const inputRef = ref<InstanceType<typeof ElInput>>()
const model = computed<string>({
  get: () => props.task.tag,
  set: (value) => {
    emit('update:tagValue', value)
    setTasks(tasks.value)
  }
})
const modelFormInput = computed({
  get: () => props.task.value,
  set: (value) => {
    emit('update:taskValue', value)
    setTasks(tasks.value)
  }
})

watch(isChageText, (value) => {
    if (value) {
        inputRef.value?.input?.focus()
    }
})
</script>
<template>
  <div v-if="task" class="TaskItem">
    <el-select v-if="task.tag" v-model="model" class="TaskItem__tag">
      <el-option v-for="tag of tags" :key="tag.value" :value="tag.value" :label="tag.label" />
    </el-select>
    <div class="TaskItem__text" :class="{ noTag: !task.tag }">
      <el-text v-if="!isChageText" @click="isChageText = true">{{ task.value }}</el-text>
      <el-form class="TaskItem__form" v-if="isChageText">
        <el-input ref="inputRef" rows="3" type="textarea" v-model="modelFormInput" />
        <el-button type="primary" @click="isChageText = false">OK</el-button>
      </el-form>
    </div>
  </div>
</template>

<style lang="scss">
.TaskItem {
  height: max-content;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  &__form {
    display: flex;
    flex-wrap: nowrap;
    gap: 10px;
  }
  &__tag {
    .el-input__wrapper {
      background-color: #f8f8f8;
      input {
      }
    }
  }
  &__text {
    &.noTag {
      grid-column: span 3;
    }
    line-height: 25px;
    grid-column: span 2;
    border-radius: 8px;
    background-color: #fff;
    padding: 5px;
    @include shadow;
  }
}
</style>
