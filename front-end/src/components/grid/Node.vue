<template>
  <div class="node" :class="nodeClass" :style="nodeStyle" @click="handleClick"></div>
</template>

<script setup lang="ts">
import { Node, NodeType } from '@/domain/node'
import { computed } from 'vue'
import { useState } from '@/stores/state'

const props = defineProps<{
  node: Node
}>()

const state = useState()

const emit = defineEmits<{
  click: []
}>()

function handleClick() {
  emit('click')
}

const nodeClass = computed(() => {
  return {
    node: true,
    'node-start': props.node.type === NodeType.start,
    'node-end': props.node.type === NodeType.end,
    'node-wall': props.node.type === NodeType.wall,
    'node-path': props.node.type === NodeType.path,
    'node-empty': props.node.type === NodeType.empty,
    'node-visited': props.node.type === NodeType.visited,
  }
})

const nodeStyle = computed(() => {
  let bg_Color = ''

  switch (props.node.type) {
    case NodeType.wall:
      bg_Color = '#000'
      break
    case NodeType.path:
      bg_Color = '#00f'
      break
    case NodeType.visited:
      bg_Color = '#0f0'
      break
    case NodeType.empty:
      bg_Color = '#fff'
      break
    case NodeType.start:
      bg_Color = '#00f'
      break
    case NodeType.end:
      bg_Color = '#f00'
      break
  }

  return {
    width: `100%`,
    height: `100%`,
    border: `1px solid #000`,
    backgroundColor: bg_Color,
    cursor:
      state.is_selecting_start || state.is_selecting_end || state.is_selecting_wall
        ? 'pointer'
        : 'default',
  }
})
</script>
