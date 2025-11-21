export enum NodeType {
  start = 'start',
  end = 'end',
  wall = 'wall',
  path = 'path',
  empty = 'empty',
  visited = 'visited',
}

export class Node {
  private readonly _id: string
  private _type: NodeType
  private readonly _position: { x: number; y: number }
  private _gCost: number
  private _hCost: number
  private _fCost: number
  private _isVisited: boolean
  private _isWall: boolean
  private _isPath: boolean
  private _isEmpty: boolean

  constructor(id: string, type: NodeType, position: { x: number; y: number }) {
    this._id = id
    this._type = type
    this._position = position
    this._gCost = 0
    this._hCost = 0
    this._fCost = 0
    this._isVisited = false
    this._isWall = false
    this._isPath = false
    this._isEmpty = false
  }

  static generateBlankNode(position: { x: number; y: number }): Node {
    const id = `node-${position.x}-${position.y}`
    const randomNodeType = NodeType.empty
    return new Node(id, randomNodeType, position)
  }

  public get id(): string {
    return this._id
  }
  public get type(): NodeType {
    return this._type
  }
  public get position(): { x: number; y: number } {
    return this._position
  }
  public get gCost(): number {
    return this._gCost
  }
  public get hCost(): number {
    return this._hCost
  }
  public get fCost(): number {
    return this._fCost
  }

  public get isVisited(): boolean {
    return this._isVisited
  }
  public get isWall(): boolean {
    return this._isWall
  }

  public get isPath(): boolean {
    return this._isPath
  }
  public get isEmpty(): boolean {
    return this._isEmpty
  }

  public set type(value: NodeType) {
    this._type = value
  }
  public set gCost(value: number) {
    this._gCost = value
  }
  public set hCost(value: number) {
    this._hCost = value
  }
  public set fCost(value: number) {
    this._fCost = value
  }

  public set isVisited(value: boolean) {
    this._isVisited = value
  }
  public set isWall(value: boolean) {
    this._isWall = value
  }
  public set isPath(value: boolean) {
    this._isPath = value
  }

  public set isEmpty(value: boolean) {
    this._isEmpty = value
  }
}
