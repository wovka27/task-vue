<script lang="ts" setup>
import { computed, onMounted, ref, watch } from 'vue'
import TaskList from '@/components/TaskList.vue'
import TaskPreview from '@/components/TaskPreview.vue'

const activeTab = ref<string>('0')
const contentRef = ref()
const contentTransformValue = computed(() =>
  activeTab.value === '0' ? 0 : -contentRef.value.children[0].children[0].clientWidth
)
</script>

<template>
  <div class="TaskComponent">
    <div class="TaskComponent__section">
      <el-tabs class="TaskComponent__tabs" v-model="activeTab">
        <el-tab-pane label="Список" />
        <el-tab-pane label="Результат" />
      </el-tabs>
    </div>
    <div ref="contentRef" class="TaskComponent__section">
      <div
        class="TaskComponent__section-inner-wrapper"
        :style="`transform: translateX(${contentTransformValue === 0 ? '0' : contentTransformValue + 'px'})`"
      >
        <div class="TaskComponent__content">
          <TaskList />
        </div>
        <div class="TaskComponent__content">
          <TaskPreview />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.TaskComponent {
  padding: 20px;
  height: 100%;
  background-color: #eeeeee;
  border-radius: 8px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(9, 1fr);
  &__content {
    flex-shrink: 0;
    width: 100%;
  }
  &__section {
    position: relative;
    &-inner-wrapper {
      width: 100%;
      height: 100%;
      display: flex;
      flex-wrap: nowrap;
      transition: all 0.3s ease-in-out;
    }
    &:first-child {
      grid-row: span 1;
    }
    &:last-child {
      overflow: hidden;
      grid-row: span 8;
    }
  }
}
</style>
