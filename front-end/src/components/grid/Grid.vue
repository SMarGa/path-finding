<template>
  <div class="grid" :class="gridClass" :style="gridStyle">
    <div v-for="(row, rowIndex) in grid.nodes" :key="rowIndex" class="row">
      <div v-for="(node, nodeIndex) in row" :key="nodeIndex" class="node">
        <Node :node="node" @node-click="emit('node-click', node.position.x, node.position.y)" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Grid } from '@/domain/grid'
import { Node as GridNode } from '@/domain/node'
import { computed } from 'vue'
import Node from './Node.vue'

const props = defineProps<{
  grid: Grid
}>()

const emit = defineEmits<{
  'node-click': [x: number, y: number]
}>()

const gridClass = computed(() => {
  return {
    grid: true,
  }
})

const gridStyle = computed(() => {
  return {
    display: `grid`,
    placeItems: `center`,
    gridTemplateColumns: `repeat(${props.grid.width}, 1fr)`,
    gridTemplateRows: `repeat(${props.grid.height}, 1fr)`,
  }
})
</script>

<style scoped>
.grid {
  box-sizing: border-box;
  padding: 1rem;
}

.row {
  width: 100%;
  height: 100%;
  min-height: 0;
}

.node {
  width: 100%;
  height: 100%;
  min-height: 0;
}
</style>
