<script lang="ts" setup>
import { computed } from 'vue'
import { useTagsStore, useTasksStore } from '@/stores'
import type { ITask } from '@/types'
import { setTasks } from '@/services/storage'

const props = defineProps<{ task: ITask }>()
const emit = defineEmits(['update:tagValue'])

const { tags } = useTagsStore()
const {tasks} = useTasksStore()
const model = computed<string>({
  get: () => props.task.tag,
  set: (value) => {
    emit('update:tagValue', value)
    setTasks(tasks.value)
  }
})
</script>
<template>
  <div v-if="task" class="TaskItem">
    <el-select v-if="task.tag" v-model="model" class="TaskItem__tag">
      <el-option v-for="tag of tags" :key="tag.value" :value="tag.value" :label="tag.label" />
    </el-select>
    <el-text class="TaskItem__text" :class="{ noTag: !task.tag }">{{ task.value }}</el-text>
  </div>
</template>

<style lang="scss">
.TaskItem {
  height: max-content;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
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
