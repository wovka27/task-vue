<script setup lang="ts">
import TagList from '@/components/TagList.vue'
import TaskForm from '@/components/TaskForm.vue'
import TaskComponent from '@/components/TaskComponent.vue'

const cells = [TaskForm, TaskComponent, TagList]
</script>

<template>
  <div class="Grid">
    <div v-for="(cell, index) of cells" :key="index" class="Grid__cell">
      <Component :is="cell" />
    </div>
  </div>
</template>

<style lang="scss">
.Grid {
  max-width: 700px;
  margin: 0 auto;
  @include absolute-full;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(8, 1fr);
  grid-template-areas:
    'bc'
    'bc'
    'bc'
    'bc'
    'bc'
    'cd'
    'ab'
    'ab';

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
  }
}
</style>
