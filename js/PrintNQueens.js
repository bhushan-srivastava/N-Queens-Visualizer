"use strict"

import addQueen from "./AddQueen.js"; // function to add the queenEmoji at the specified location on the chess board
import removeQueen from "./RemoveQueen.js"; // function to remove the queenEmoji at the specified location on the chess board
import cloneTableOfSizeN from "./CloneChessBoard.js"; // function to clone the last chess board in the N Queens Visualizer Section and display it
import generateTableOfSizeN from "./GenerateChessBoard.js"; // function to generate a chess board of size n x n

/** store the number of solutions */
let countOfChessBoards = 1;

/**
 * Store the animation functions and their respective args
 * 
 * animationsArr = [
 * 
        [function1, [parameter1, parameter2,....parameterN]],
        [function2, [parameter1, parameter2,....parameterN]],
                            .
                            .
                            .
                            .
        [functionN, [parameter1, parameter2,....parameterN]]
    ]
 */
let animationsArr = new Array();

/**
 * Set the value of countOfChessBoards
 * @param {Number} valueToSet 
 */
function setCountOfChessBoards(valueToSet) {
    countOfChessBoards = valueToSet;
}

/**
 * Clear animationsArr
 */
function clearAnimationsArr() {
    animationsArr = new Array();
}

/**
 * Function that returns an array of animation functions with parameters to visualize the solution algorithm
 * @param {Number[]} matrix Array of N x N
 * @param {String} queenSoFar String that represents all the locations where a queen is currently placed
 * @param {Number} row Current row of the chess board where we are trying to place a queen
 * @returns The array with animation functions and their respective parameters
 */
function getAnimationsArr(matrix, queenSoFar, row) {
    // recursive solution algorithm for the N-Queens Problem
    printNQueens(matrix, queenSoFar, row);

    // return the array with animation functions and their respective parameters
    return animationsArr;
}

/** N-Queens is the problem of placing N queens on an N*N chessboard so that no two queens attack each other 
  * A Queen can kill other Queens in all of the 8 directions possible (left, right, up, down, and all the 4 diagonals)
  * Approach:
    * No 2 Queens can be in the same row
    * No 2 Queens can be in the same column
    * No 2 Queens can be in the left diagonal
    * No 2 Queens can be in the right diagonal
    * Since, 
        * No 2 queens can be in the same row 
        * There are n queens and n rows
        * It implies that each row will contain exactly one queen
    * Time Complexity: O(n!)
    * Auxiliary Space Complexity: O(n)
  */

/**
 * Recursive solution algorithm for the N-Queens Problem
 * @param {Number[]} chess N x N array denoting the chess board with 1's on the positions with a queen placed on them
 * @param {String} qsf (queen so far) a string that represents all the locations where a queen is currently placed
 * @param {Number} row Current row of the chess board where we are trying to place a queen
 * @returns 
 */
function printNQueens(chess, qsf, row) {
    //base case: there are no more rows left in the chess array i.e. we have seen n rows
    if (row == chess.length) {
        /* we have found a solution where n queens are placed on a n x n board with no queens attacking each other
         * this solution can be an empty board also because "no solution" is still counted as a solution 
         * just like null set is a subset of every set and null set is a also subset of an empty/null set
         */

        // increase the count of chess boards as we are about to make a new chess board and try to find another solution for the N-Queens Problem
        countOfChessBoards++;
        // add cloneTableOfSizeN function which will clone the last chess board and display it
        animationsArr.push([cloneTableOfSizeN, [chess.length, countOfChessBoards]]);

        return;
    }

    // check if we can place the queen on each column of the current row
    for (let col = 0; col < chess.length; col++) {
        // check if the current cell is safe for the queen to be placed
        if (chess[row][col] == 0 && isQueenSafe(chess, row, col) == true) {
            // place the queen in the chess array (cells with the queen are 1 and other cells i.e. empty cells are 0)
            chess[row][col] = 1;
            // add the animation function to display the queenEmoji on the current row,col of the chess board
            animationsArr.push([addQueen, [row, col, countOfChessBoards]]);

            // we have placed a queen on the current row (i.e. chess[row][col] = 1;) and now we'll go to the next row
            printNQueens(chess, qsf + row + "-" + col + ",", row + 1);

            // remove the previously placed queen after returning from the next row
            chess[row][col] = 0;
            // add the animation function to remove the queenEmoji on the current row,col of the chess board
            animationsArr.push([removeQueen, [row, col, countOfChessBoards]]);
        }
    }
}

/**
 * Check if the current row,col is a safe cell for the queen
 * 
 * A Queen can kill other Queens in all of the 8 directions possible (left, right, up, down, and all the 4 diagonals)
 * 
 * No 2 Queens can be in the same row
 * 
 * No 2 Queens can be in the same column
 * 
 * No 2 Queens can be in the left diagonal
 * 
 * No 2 Queens can be in the right diagonal
 * @param {Number[]} chess N x N array denoting the chess board with 1's on the positions with a queen placed on them
 * @param {Number} row Current row of the chess board where we are trying to place a queen
 * @param {Number} col Current column of the chess board where we are trying to place a queen
 * @returns {boolean} True if the cell at row,col is a safe cell for the queen
 */
function isQueenSafe(chess, row, col) {
    /** left diagonal 
      * check all the cells on the left diagonal only for rows above the current row as we have neither placed a queen on the current row nor the rows below
      */
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
        // if there is a queen on the left diagonal, return false
        if (chess[i][j] == 1) {
            return false;
        }
    }

    /** vertically adjacent cells
      * check all the cells vertically above the current cell as we have neither placed a queen on the current row nor the rows below
      */
    for (let i = row - 1, j = col; i >= 0; i--) {
        // if there is a queen on any cell which is vertically above the current cell then return false
        if (chess[i][j] == 1) {
            return false;
        }
    }

    /** left diagonal
      * check all the cells on the right diagonal only for rows above the current row as we have neither placed a queen on the current row nor the rows below
      */
    for (let i = row - 1, j = col + 1; i >= 0 && j < chess.length; i--, j++) {
        // if there is a queen on the right diagonal, return false
        if (chess[i][j] == 1) {
            return false;
        }
    }

    // if the function has not reached this point, it means that it has not returned false i.e. the current cell is safe for the queen
    return true;
}

export { setCountOfChessBoards, clearAnimationsArr, getAnimationsArr };