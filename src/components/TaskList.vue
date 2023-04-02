<script lang="ts" setup>
import TaskItem from '@/components/TaskItem.vue'
import { useTasksStore } from '@/stores'

const {tasks} = useTasksStore()
</script>

<template>
  <div class="TaskList">
    <div class="TaskList__main">
      <TaskItem />
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
    grid-template-columns: 1fr;
    height: 100%;
    background-color: #f5f5f5;
  }
}
</style>
