<script lang="ts" setup>
import { getDate, parseOrStringifyTagValue } from '@/utils/helpers'
import { CopyDocument } from '@element-plus/icons-vue'
import {computed, ref} from 'vue'
import {useDocumentVisible, useTasksStore} from '@/stores'
import { copy } from '@/utils'

const { tasks } = useTasksStore()
const {type} = useDocumentVisible()

const weekday = getDate()
const textRef = ref()

const getTextValue = (tag: string, value: string) => {
  return !tag ? `- ${value}` : `- ${parseOrStringifyTagValue('str', tag)}: ${value}`
}
</script>

<template>
  <div class="TaskPreview">
    <el-button
      class="TaskPreview__btn"
      title="Скопировать все"
      type="primary"
      :icon="CopyDocument"
      @click="copy(textRef.innerText)"
    ></el-button>
    <div class="TaskPreview__content">
      <article ref="textRef">
        <ul v-if="tasks.length">
          <li>{{ weekday }}:</li>
          <li v-for="task of tasks" :key="task.id">{{ getTextValue(task.tag, task.value) }}</li>
        </ul>
      </article>
    </div>
  </div>
</template>

<style lang="scss">
.TaskPreview {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  padding: 10px;
  @include shadow;
  background-color: #f5f5f5;
  color: var(--el-text-color-regular);
  &__content {
    @include no-scroll-bar;
    overflow-y: auto;
  }
  &__btn {
    @include shadow;
    position: absolute;
    top: 20px;
    right: 20px;
  }
}
</style>
