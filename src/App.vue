<script setup lang="ts">
import Components from '@/components'
</script>

<template>
  <div class="Grid">
    <div v-for="(Component, index) of Components" :key="index" class="Grid__cell">
      <Component :is="Component" />
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
