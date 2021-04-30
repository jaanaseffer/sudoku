import { GRID, NUMBERS } from 'typings'
import { shuffle, isInRow, isInCol, identifySquare, isInSquare, checkGrid } from 'utils'

const numbers: NUMBERS[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]

/**
 * A backtracking/recursive function to check all the possible
 * combinations of numbers
 * @param grid 9x9 Sudoku Grid
 */
function fillGrid(grid: GRID) {
  let row = 0
  let col = 0

  for (let i = 0; i < 81; i++) {
    row = Math.floor(i / 9)
    col = i % 9

    if (grid[row][col] === 0) {
      shuffle(numbers)

      for (let value of numbers) {
        // Is it not in grid row?
        if (!isInRow({grid, row, value}))
          // Is it not in grid column?
          if (!isInCol({col, grid, value})) {
            // Is it not in grid square?
            // If this is the case
            const square = identifySquare({col, grid, row})
            if (!isInSquare({square, value})) {
              grid[row][col] = value
              // Check grid if it is full, if yes stop and return true
              if (checkGrid(grid)) return true
              // Otherwise run fillGrid(grid)
              else if (fillGrid(grid)) return true
            }
          }
      }
      break
    }
  }
  grid[row][col] = 0
}

export default fillGrid
