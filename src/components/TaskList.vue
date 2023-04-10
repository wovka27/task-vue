<script lang="ts" setup>
import TaskItem from '@/components/TaskItem.vue'
import { useTasksStore } from '@/stores'

const { tasks } = useTasksStore()
</script>

<template>
  <div class="TaskList">
    <div class="TaskList__main">
      <TransitionGroup name='hui'>
        <TaskItem
          v-for="task of tasks"
          :key="task.id"
          :task="task"
          v-model:tag-value="task.tag"
          v-model:task-value="task.value"
        />
      </TransitionGroup>
    </div>
  </div>
</template>

<style lang="scss">
.hui-move,
.hui-enter-active,
.hui-leave-active {
  transition: all 0.5s ease;
}
.hui-enter-from,
.hui-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
.hui-leave-active {
  position: absolute;
}
.TaskList {
  @include list;
  padding: 0!important;
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
