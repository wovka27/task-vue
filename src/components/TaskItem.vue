<script lang="ts" setup>
import { ref } from 'vue'
import { useTagsStore } from '@/stores'
import type { ITask } from '@/types'
const props = defineProps<{task: ITask}>()

const { tags } = useTagsStore()
const tagSelect = ref<string>()
</script>
<template>
  <div v-if='task' class="TaskItem">
    <el-select v-if='task.tag' v-model="tagSelect" class="TaskItem__tag">
      <el-option v-for="tag of tags" :key="tag.value" :value="tag.value" :label="tag.label" />
    </el-select>
    <el-text class="TaskItem__text">{{task.value}}</el-text>
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
