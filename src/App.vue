<script setup lang="ts">
import TaskList from '@/components/TaskList.vue'
import TagList from '@/components/TagList.vue'
import TaskPreview from '@/components/TaskPreview.vue'
import TaskForm from '@/components/TaskForm.vue'

const cells = [TaskForm, TaskList, TagList, TaskPreview]
</script>

<template>
  <div class="Grid">
    <div v-for="(cell, index) of cells" :key="index" class="Grid__cell"><Component :is="cell" /></div>
  </div>
</template>

<style lang="scss">
.Grid {
  @include absolute-full;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-template-areas:
    'ab ab bc bc'
    'ab ab bc bc'
    'ab ab bc bc'
    'cd cd de de';

  &__cell {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 10px;
    @include no-scroll-bar;
    &:nth-child(1) {
      grid-area: ab;
    }
    &:nth-child(2) {
      grid-area: bc;
    }
    &:nth-child(3) {
      grid-area: cd;
    }
    &:nth-child(4) {
      grid-area: de;
    }
  }
}
</style>
