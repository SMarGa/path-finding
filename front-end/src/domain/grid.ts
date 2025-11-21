import { Node } from './node'

export class Grid {
  private readonly _nodes: Node[][]
  private readonly _width: number
  private readonly _height: number

  constructor(width: number, height: number) {
    this._nodes = []
    for (let y = 0; y < height; y++) {
      const row: Node[] = []
      for (let x = 0; x < width; x++) {
        row.push(Node.generateBlankNode({ x, y }))
      }
      this._nodes.push(row)
    }
    this._width = width
    this._height = height
  }

  public get nodes(): Node[][] {
    return this._nodes
  }
  public get width(): number {
    return this._width
  }
  public get height(): number {
    return this._height
  }
}
