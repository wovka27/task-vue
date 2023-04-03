<script lang="ts" setup>
import { Plus } from '@element-plus/icons-vue'
import TagItem from '@/components/TagItem.vue'
import { useTagsStore } from '@/stores'
import { nextTick, ref } from 'vue'
import { parseOrStringifyTagValue } from '@/utils/helpers'
import { ElInput } from 'element-plus'

const { tags, addTag, deleteTag, selectTag } = useTagsStore()

const isAdded = ref<boolean>(false)
const inputValue = ref<string>('')
const inputRef = ref<InstanceType<typeof ElInput>>()

const add = () => {
  isAdded.value = true
  nextTick(() => inputRef.value!.input!.focus())
}
const click = () => {
  addTag({ value: parseOrStringifyTagValue('parse', inputValue.value), label: inputValue.value, selected: false })
  isAdded.value = false
  inputValue.value = ''
}
</script>

<template>
  <div class="TagList">
    <div class="TagList__main" v-grab-scroll>
      <div class="TagList__header">
        <el-button v-if="!isAdded" type="primary" title="Добавит тег" :icon="Plus" @click="add" />
        <el-form class="TagList__add" v-if="isAdded" @submit.prevent="click">
          <el-input ref="inputRef" class="TagList__input" v-model.trim="inputValue" />
          <el-button type="primary" native-type="submit">Ok</el-button>
        </el-form>
      </div>
      <TagItem
        v-for="tag of tags"
        :key="tag.value"
        :value="tag.label"
        :selected='tag.selected'
        @close="deleteTag(tag.label)"
        @click.passive="selectTag(tag.label)"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.TagList {
  @include list;
  &__main {
    display: flex;
    overflow-x: auto;
    @include no-scroll-bar;
    gap: 10px;
    align-items: center;
    background-color: $color-bg;
  }
  &__input {

  }
  &__header {
    flex-shrink: 0;
  }
  &__add {
    display: flex;
    gap: 20px;

  }
}
</style>
