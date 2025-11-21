<template>
  <div class="grid-vizualizer">
    <div class="controls">
      <button @click="selectStartNode(0, 0)">Select Start Node</button>
    </div>
    <Grid :grid="grid" />
  </div>
</template>
<script setup lang="ts">
import Grid from '@/components/grid/grid.vue'
import { Grid as GridDomain } from '@/domain/grid'
import { NodeType } from '@/domain/node'
import { ref } from 'vue'

const grid = ref<GridDomain>(new GridDomain(10, 10))

function selectStartNode(x: number, y: number) {
  if (grid.value.nodes[y]?.[x]) {
    grid.value.nodes[y][x].type = NodeType.start
  }
}
</script>
<style scoped>
.grid-vizualizer {
  display: grid;
  height: 100%;
  width: 100%;
}
</style>
