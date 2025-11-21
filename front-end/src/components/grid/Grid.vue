<template>
  <div class="grid" :class="gridClass" :style="gridStyle">
    <div v-for="(row, rowIndex) in grid.nodes" :key="rowIndex" class="row">
      <div v-for="(node, nodeIndex) in row" :key="nodeIndex" class="node">
        <Node :node="node" @click="handleNodeClick(node.position.x, node.position.y)" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Grid } from '@/domain/grid'
import { computed } from 'vue'
import Node from './Node.vue'

const props = defineProps<{
  grid: Grid
}>()

const emit = defineEmits<{
  'node-click': [x: number, y: number]
}>()

function handleNodeClick(x: number, y: number) {
  emit('node-click', x, y)
}

const gridClass = computed(() => {
  return {
    grid: true,
  }
})

const gridStyle = computed(() => {
  return {
    width: `100%`,
    height: `100%`,
    padding: `25px`,
    display: `grid`,
    placeItems: `center`,
    gridTemplateColumns: `repeat(${props.grid.width}, 1fr)`,
    gridTemplateRows: `repeat(${props.grid.height}, 1fr)`,
  }
})
</script>

<style scoped>
.row {
  width: 100%;
  height: 100%;
}

.node {
  width: 100%;
  height: 100%;
}
</style>
