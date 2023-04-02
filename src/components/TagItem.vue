<script lang="ts" setup>
import type { ITag } from '@/types'
import { computed } from 'vue'
import { ElTag } from 'element-plus'

const props = defineProps<{ value: ITag['value']; selected?: ITag['selected'] }>()
const type = computed<InstanceType<typeof ElTag>['type']>(() => (props.selected ? 'success' : 'warning'))
</script>

<template>
  <el-tag round closable class="TagItem" size="large" :type="type" effect="dark">
    {{ value.toUpperCase() }}
  </el-tag>
</template>

<style lang="scss">
.TagItem {
  cursor: pointer;
  max-height: max-content;
  font-weight: 700;
}
</style>
