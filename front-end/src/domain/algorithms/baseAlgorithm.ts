import type { Grid } from '../grid'

export abstract class BaseAlgorithm {
  abstract solve(grid: Grid): void
}
