<script lang="ts" setup>
import { ref, watch } from 'vue'
import TaskList from '@/components/TaskList.vue'
import TaskPreview from '@/components/TaskPreview.vue'

const activeTab = ref<string>('0')
</script>

<template>
  <div class="TaskComponent">
    <div class='TaskComponent__section'>
      <el-tabs class='TaskComponent__tabs' v-model="activeTab">
        <el-tab-pane label="Список" />
        <el-tab-pane label="Результат" />
      </el-tabs>
    </div>
    <div class='TaskComponent__section'>
      <TaskList v-if="activeTab === '0'" />
      <TaskPreview v-if="activeTab === '1'" />
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
  &__section {
    position: relative;
    &:first-child {
      grid-row: span 1;
    }
    &:last-child {
      grid-row: span 8;
    }
  }
}
</style>
