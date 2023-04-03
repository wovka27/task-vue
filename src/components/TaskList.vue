<script lang="ts" setup>
import TaskItem from '@/components/TaskItem.vue'
import { useTasksStore } from '@/stores'

const { tasks } = useTasksStore()
</script>

<template>
  <div class="TaskList">
    <div class="TaskList__main">
      <TaskItem
        v-for="task of tasks"
        :key="task.id"
        :task="task"
        v-model:tag-value="task.tag"
        v-model:task-value="task.value"
      />
    </div>
  </div>
</template>

<style lang="scss">
.TaskList {
  @include list;
  &__header {
  }
  &__main {
    display: grid;
    row-gap: 30px;
    align-content: start;
    grid-template-columns: 1fr;
    height: 100%;
    background-color: #f5f5f5;
  }
}
</style>
