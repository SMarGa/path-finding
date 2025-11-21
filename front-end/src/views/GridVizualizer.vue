<template>
  <div class="grid-vizualizer">
    <div class="controls">
      <button @click="toggleSelectStart">Select Start Node</button>
      <button @click="toggleSelectEnd">Select End Node</button>
      <button @click="toggleSelectWall">Select Wall Node</button>
      <button @click="clearGrid">Clear Grid</button>
    </div>
    <Grid :grid="gridDomain" @node-click="handleNodeClick" />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import Grid from '@/components/grid/Grid.vue'
import { Grid as GridDomain } from '@/domain/grid'
import { NodeType } from '@/domain/node'
import { useState } from '@/stores/state'

const grid = ref<GridDomain>(new GridDomain(20, 20))

const state = useState()

const isSelectingStart = computed(() => state.is_selecting_start)
const isSelectingEnd = computed(() => state.is_selecting_end)
const isSelectingWall = computed(() => state.is_selecting_wall)

const gridDomain = computed(() => {
  return grid.value as GridDomain
})

function selectStartNode(x: number, y: number) {
  if (grid.value.nodes[y]?.[x]) {
    grid.value.nodes[y][x].type = NodeType.start
  }
}

function selectEndNode(x: number, y: number) {
  if (grid.value.nodes[y]?.[x]) {
    grid.value.nodes[y][x].type = NodeType.end
  }
}

function selectWallNode(x: number, y: number) {
  if (grid.value.nodes[y]?.[x]) {
    grid.value.nodes[y][x].type = NodeType.wall
  }
}

function clearGrid() {
  grid.value.nodes.forEach((row) => {
    row.forEach((node) => {
      node.type = NodeType.empty
    })
  })
}

function clearToggleSelection() {
  state.setIsSelectingStart(false)
  state.setIsSelectingEnd(false)
  state.setIsSelectingWall(false)
}

function toggleSelectStart() {
  clearToggleSelection()
  state.setIsSelectingStart(!isSelectingStart.value)
}
function toggleSelectEnd() {
  clearToggleSelection()
  state.setIsSelectingEnd(!isSelectingEnd.value)
}
function toggleSelectWall() {
  clearToggleSelection()
  state.setIsSelectingWall(!isSelectingWall.value)
}

function handleNodeClick(x: number, y: number) {
  if (isSelectingStart.value) {
    if (grid.value.nodes[y]?.[x]) {
      grid.value.nodes[y][x].type = NodeType.start
    }
    state.setIsSelectingStart(false)
  } else if (isSelectingEnd.value) {
    if (grid.value.nodes[y]?.[x]) {
      grid.value.nodes[y][x].type = NodeType.end
    }
    state.setIsSelectingEnd(false)
  } else if (isSelectingWall.value) {
    if (grid.value.nodes[y]?.[x]) {
      grid.value.nodes[y][x].type = NodeType.wall
    }
  }
}
</script>
<style scoped>
.controls {
  display: flex;
  flex-direction: row;
  gap: 5px;
  flex-shrink: 0;
}
.grid-vizualizer {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
}
</style>
