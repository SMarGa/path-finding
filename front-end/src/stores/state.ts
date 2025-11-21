import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useState = defineStore('state', () => {
  const is_selecting_start = ref(false)
  const is_selecting_end = ref(false)
  const is_selecting_wall = ref(false)
  const is_selecting_path = ref(false)
  const is_selecting_empty = ref(false)
  const is_selecting_visited = ref(false)

  const is_selecting = computed(() => {
    return (
      is_selecting_start.value ||
      is_selecting_end.value ||
      is_selecting_wall.value ||
      is_selecting_path.value ||
      is_selecting_empty.value ||
      is_selecting_visited.value
    )
  })

  function setIsSelectingStart(value: boolean) {
    is_selecting_start.value = value
  }
  function setIsSelectingEnd(value: boolean) {
    is_selecting_end.value = value
  }
  function setIsSelectingWall(value: boolean) {
    is_selecting_wall.value = value
  }
  function setIsSelectingPath(value: boolean) {
    is_selecting_path.value = value
  }
  function setIsSelectingEmpty(value: boolean) {
    is_selecting_empty.value = value
  }
  function setIsSelectingVisited(value: boolean) {
    is_selecting_visited.value = value
  }
  return {
    is_selecting,
    setIsSelectingStart,
    setIsSelectingEnd,
    setIsSelectingWall,
    setIsSelectingPath,
    setIsSelectingEmpty,
    setIsSelectingVisited,
    is_selecting_start,
    is_selecting_end,
    is_selecting_wall,
    is_selecting_path,
    is_selecting_empty,
    is_selecting_visited,
  }
})
