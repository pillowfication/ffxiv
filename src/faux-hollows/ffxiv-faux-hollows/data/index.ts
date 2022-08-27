import _boardPatterns from './board-patterns.json'

export type BoardType = `${'A' | 'B' | 'C' | 'D'}${'←' | '↑' | '→' | '↓'}`

export enum CellType {
  OutOfBounds = 0,
  Empty = 1,
  Wall = 2,
  Sword = 3,
  Coffer = 4,
  Commander = 5,
  CommanderPossible = 6
}

export const boardPatterns = _boardPatterns as Record<BoardType, { template: number[], boards: CellType[][] }>
