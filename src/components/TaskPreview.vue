<script lang='ts' setup>

import { getDate } from '@/utils/helpers'
import { CopyDocument } from '@element-plus/icons-vue'
import { getNotification } from '@/utils'
import { onMounted, ref } from 'vue'

const weekday = getDate('weekday')
const textRef = ref()
const copy = async () => {
  try {
    await navigator.clipboard.writeText(textRef.value.innerText)
    getNotification('Успешно скопировано')
  } catch (e) {
    getNotification('Не удалось скопировать')
  }
}
</script>

<template>
  <div class='TaskPreview'>
    <el-button
      class='TaskPreview__btn'
      title="Скопировать все"
      type="primary"
      :icon="CopyDocument"
      @click="copy"
    ></el-button>
    <article ref='textRef'>
      <p>{{weekday}}:</p>
      <ul>
        <li>- HUI</li>
        <li>- hui2</li>
        <li>- HUI3</li>
      </ul>
    </article>
  </div>
</template>

<style lang='scss'>
.TaskPreview {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  padding: 20px;
  @include shadow;
  @include no-scroll-bar;
  background-color: $color-bg;
  color: lightgreen;
  &__btn {
    position: absolute;
    top: 20px;
    right: 20px;
  }
}
</style>