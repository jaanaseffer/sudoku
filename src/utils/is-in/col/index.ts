import {GRID, NUMBERS} from 'typings'

interface IInput {
  grid: GRID
  value: NUMBERS
  col: number
}

/**
 * A function that returns true if the values is already being used in the current grid column
 * @param col
 * @param grid
 * @param value
 */
function isInCol({col, grid, value}: IInput): boolean {
  for (let i = 0; i < 9; i++) if (value === grid[i][col]) return true
  return false
}
export default isInCol
