import { BaseAlgorithm } from './baseAlgorithm'
import { NodeType, Node } from '../node'
import { Grid as GridDomain } from '../grid'

export class DFS extends BaseAlgorithm {
  private stack: Node[] = []
  private visited: Node[] = []
  private start: Node | null = null
  private end: Node | null = null
  private grid: GridDomain | null = null
  solve(grid: GridDomain): void {
    this.grid = grid
    for (const row of this.grid?.nodes ?? []) {
      for (const node of row) {
        if (node.type === NodeType.start) {
          this.start = node
        }
        if (node.type === NodeType.end) {
          this.end = node
        }
      }
    }
    if (this.start === null || this.end === null) {
      throw new Error('Start or end node not found')
    }
    this.stack.push(this.start)

    while (this.stack.length > 0) {
      const current = this.stack.pop()
      if (current === this.end) {
        break
      }
      if (!current) {
        continue
      }
      this.visited.push(current)

      for (const neighbor of this.getNeighbors(current)) {
        if (neighbor.type === NodeType.wall || this.visited.includes(neighbor)) {
          continue
        }
        this.stack.push(neighbor)
      }
    }
  }

  private getNeighbors(node: Node): Node[] {
    const neighbors: Node[] = []
    const { x, y } = node.position
    const neighborsPositions = [
      { x: x - 1, y: y },
      { x: x + 1, y: y },
      { x: x, y: y - 1 },
      { x: x, y: y + 1 },
    ]
    for (const neighborPosition of neighborsPositions) {
      const neighbor = this.grid?.nodes[neighborPosition.y]?.[neighborPosition.x]
      if (neighbor && neighbor.type !== NodeType.wall && !this.visited.includes(neighbor)) {
        neighbors.push(neighbor)
      }
    }
    return neighbors
  }
}
