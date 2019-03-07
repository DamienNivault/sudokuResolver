"use strict";

let grid = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 2, 0, 8, 5, 0, 0, 4, 1],
  [8, 6, 4, 0, 2, 1, 9, 0, 0],
  [0, 9, 8, 5, 0, 0, 3, 0, 2],
  [0, 0, 3, 9, 0, 0, 0, 7, 0],
  [0, 1, 2, 0, 0, 7, 0, 9, 0],
  [5, 0, 0, 0, 0, 6, 0, 2, 9],
  [3, 4, 0, 2, 0, 0, 0, 6, 5],
  [0, 0, 0, 1, 0, 0, 4, 0, 0]
];
let grid2 = [
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9]
];

let grid3 = [
  [4, 0, 2, 0, 1, 7, 0, 3, 0],
  [3, 0, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 9, 0, 6, 0, 0],
  [0, 2, 0, 0, 4, 0, 7, 0, 8],
  [0, 0, 4, 0, 0, 0, 5, 0, 0],
  [1, 0, 7, 0, 6, 0, 0, 9, 0],
  [0, 0, 6, 0, 3, 0, 0, 0, 0],
  [9, 0, 0, 0, 0, 0, 0, 0, 3],
  [0, 4, 0, 1, 8, 0, 9, 0, 6]
];

let grid4 = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 3, 0, 8, 5],
  [0, 0, 1, 0, 2, 0, 0, 0, 0],
  [0, 0, 0, 5, 0, 7, 0, 0, 0],
  [0, 0, 4, 0, 0, 0, 1, 0, 0],
  [0, 9, 0, 0, 0, 0, 0, 0, 0],
  [5, 0, 0, 0, 0, 0, 0, 7, 3],
  [0, 0, 2, 0, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 4, 0, 0, 0, 9]
];

let grid5 = [
  [1, 0, 0, 0, 0, 7, 0, 9, 0],
  [0, 3, 0, 0, 2, 0, 0, 0, 8],
  [0, 0, 9, 6, 0, 0, 5, 0, 0],
  [0, 0, 5, 3, 0, 0, 9, 0, 0],
  [0, 1, 0, 0, 8, 0, 0, 0, 2],
  [6, 0, 0, 0, 0, 4, 0, 0, 0],
  [3, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 4, 0, 0, 0, 0, 0, 0, 7],
  [0, 0, 7, 0, 0, 0, 3, 0, 0]
];
let grid6 = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 3, 0, 8, 5],
  [0, 0, 1, 0, 2, 0, 0, 0, 0],
  [0, 0, 0, 5, 0, 7, 0, 0, 0],
  [0, 0, 4, 0, 0, 0, 1, 0, 0],
  [0, 9, 0, 0, 0, 0, 0, 0, 0],
  [5, 0, 0, 0, 0, 0, 0, 7, 3],
  [0, 0, 2, 0, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 4, 0, 0, 0, 9]
];
//Pretty print function
function prettyPrint(grid) {
  console.log("*-------*-------*-------*");
  grid.forEach((line, i) => {
    let prettyLine = "| ";
    line.forEach(
      (number, j) => (prettyLine += number + ((j + 1) % 3 === 0 ? " | " : " "))
    );
    console.log(prettyLine);
    if ((i + 1) % 3 === 0) {
      console.log("*-------*-------*-------*");
    }
  });
}

function findEmptyCell(grid, row, col) {
  var done = false;
  //Apply bad coordinates so that when the grid is full we can check in solve if row = -1
  var res = [-1, -1];

  while (!done) {
    //If we are at the last row, done
    if (row == 9) {
      done = true;
    } else {
      //If its an empty cell
      if (grid[row][col] == 0) {
        //Apply the coordinates to res
        res[0] = row;
        res[1] = col;
        done = true;
      } else {
        //Continue the iterations to the columns or the rows until the last row (9)
        if (col < 8) {
          col++;
        } else {
          row++;
          col = 0;
        }
      }
    }
  }
  //Res is passed to solveSudoku as the coordinates of the empty cell
  return res;
}
const emptyCells = [];
function getListOfEmptyCell(grid) {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 0) {
        let pos = { x: i, y: j };
        emptyCells.push(pos);
      }
    }
  }
}

function noConflicts(grid, row, col, num) {
  //If all the conditions are valids, can apply the number
  return (
    isRowOk(grid, row, num) &&
    isColOk(grid, col, num) &&
    isSquareOk(grid, row, col, num)
  );
}
// Function who check if there is two same number in a row
function isRowOk(grid, row, num) {
  for (let col = 0; col < 9; col++) {
    if (grid[row][col] == num) return false;
  }

  return true;
}
// Function who check if there is two same number in a column
function isColOk(grid, col, num) {
  for (let row = 0; row < 9; row++) {
    if (grid[row][col] == num) return false;
  }

  return true;
}

// Function who check if there is two same number in a square
function isSquareOk(grid, row, col, num) {
  // Delimite the square
  row = Math.floor(row / 3) * 3;
  col = Math.floor(col / 3) * 3;

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      //If iterate to check all the number of the square
      if (grid[row + i][col + j] == num) return false;
    }
  }

  return true;
}

function solveSudoku(grid, emptyCells, index) {
  //Apply coordinates of the empty cell (or not)
  if (index == emptyCells.length) {
    prettyPrint(grid);
    return true;
  }
  let row = emptyCells[index].x;
  let col = emptyCells[index].y;
  for (let num = 1; num <= 9; num++) {
    //Verify all the conditions (col,row and square)
    if (noConflicts(grid, row, col, num)) {
      //Apply the number

      grid[row][col] = num;
      //process.stdout.write("\x1b[32m" + String(grid[row][col]) + "\x1b[0m");

      //Apply recursion
      if (solveSudoku(grid, emptyCells, index + 1)) {
        return true;
      } else {
        grid[row][col] = 0;
      }

      //Binding 0 to the cell
    }
  }
  // Backtracking
  return false;
}

getListOfEmptyCell(grid3);

prettyPrint(grid3);
console.time("timer sudoku");
solveSudoku(grid3, emptyCells, 1);
//solveSudoku(grid, emptyCells, 1);
console.timeEnd("timer sudoku");
