<template>
  <div class="grid-vizualizer">
    <div class="controls">
      <button @click="toggleSelectStartMode" :class="{ active: state.is_selecting_start }">
        Select Start Node
      </button>
      <button @click="toggleSelectEndMode" :class="{ active: state.is_selecting_end }">
        Select End Node
      </button>
      <button @click="toggleSelectWallMode" :class="{ active: state.is_selecting_wall }">
        Select Wall
      </button>
    </div>
    <Grid :grid="grid as GridDomain" @node-click="handleNodeClick" />
  </div>
</template>

<script setup lang="ts">
import Grid from '@/components/grid/Grid.vue'
import { Grid as GridDomain } from '@/domain/grid'
import { NodeType } from '@/domain/node'
import { ref } from 'vue'
import { useState } from '@/stores/state'

const grid = ref<GridDomain>(new GridDomain(10, 10))
const state = useState()

function toggleSelectStartMode() {
  // * Turn off other selection modes
  state.setIsSelectingEnd(false)
  state.setIsSelectingWall(false)
  state.setIsSelectingStart(!state.is_selecting_start)
}

function toggleSelectEndMode() {
  // * Turn off other selection modes
  state.setIsSelectingStart(false)
  state.setIsSelectingWall(false)
  state.setIsSelectingEnd(!state.is_selecting_end)
}

function toggleSelectWallMode() {
  // * Turn off other selection modes
  state.setIsSelectingStart(false)
  state.setIsSelectingEnd(false)
  state.setIsSelectingWall(!state.is_selecting_wall)
}

function handleNodeClick(x: number, y: number) {
  const node = grid.value.nodes[y]?.[x]
  if (!node) return

  if (state.is_selecting_start) {
    // * Clear previous start node
    for (const row of grid.value.nodes) {
      for (const n of row) {
        if (n.type === NodeType.start) {
          n.type = NodeType.empty
        }
      }
    }
    // * Set new start node
    node.type = NodeType.start
    // * Turn off selection mode after selecting
    state.setIsSelectingStart(false)
  } else if (state.is_selecting_end) {
    // * Clear previous end node
    for (const row of grid.value.nodes) {
      for (const n of row) {
        if (n.type === NodeType.end) {
          n.type = NodeType.empty
        }
      }
    }
    // * Set new end node
    node.type = NodeType.end
    // * Turn off selection mode after selecting
    state.setIsSelectingEnd(false)
  } else if (state.is_selecting_wall) {
    // * Toggle wall: if it's a wall, make it empty; otherwise make it a wall
    // * Don't toggle if it's start or end node
    if (node.type === NodeType.start || node.type === NodeType.end) {
      return
    }
    if (node.type === NodeType.wall) {
      node.type = NodeType.empty
    } else {
      node.type = NodeType.wall
    }
    // * Keep selection mode on for multiple selections
  }
}
</script>
<style scoped>
.grid-vizualizer {
  display: grid;
  height: 100%;
  width: 100%;
}

.controls {
  padding: 1rem;
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

button {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  border: 2px solid #333;
  background-color: #fff;
  transition: all 0.2s;
}

button:hover {
  background-color: #f0f0f0;
}

button.active {
  background-color: #0056b3;
  color: #fff;
  border-color: #0056b3;
}
</style>
