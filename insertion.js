let givenArr = [22, 27, 16, 2, 18, 6];

// Pseudo Code

// First Task

// -- First of all the first element changes with the smallest element in the arr
let firstShape = [2, 27, 16, 22, 18, 6];

// -- Seecondly the second element changes with the smallest elem among the rest. If  second elem is the smallest than do not touch it
let secondShape = [2, 27, 16, 22, 18, 6];

// -- Similar transactions like in the second shape
let thirdShape = [2, 6, 16, 22, 18, 27];

// Lase action
let fourShape = [2, 6, 16, 18, 22, 27];

// --------------------------------------------------------------

// Second Task
let answerSecon = "O(n^2)";

// Third Task
let answerThird = "Average Case";

// Forth Task

let phases = [
  {
    first: [7, 3, 5, 8, 2, 9, 4, 15, 6],
    second: [2, 3, 5, 8, 7, 9, 4, 15, 6],
    third: [(2, 3, 4, 8, 7, 9, 5, 15, 6)],
    forth: [(2, 3, 4, 5, 7, 9, 8, 15, 6)],
  },
]