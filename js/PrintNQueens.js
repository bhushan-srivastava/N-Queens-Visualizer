"use strict"

import addQueen from "/js/AddQueen.js";
import removeQueen from "/js/RemoveQueen.js";
import cloneTableOfSizeN from "/js/CloneChessBoard.js";
import generateTableOfSizeN from "/js/GenerateChessBoard.js";

let countOfChessBoards = 1;

let animationsArr = new Array();

function setCountOfChessBoards(valueToSet) {
    countOfChessBoards = valueToSet;
}

function clearAnimationsArr() {
    animationsArr = new Array();
}

function getAnimationsArr(matrix, queenSoFar, r) {
    printNQueens(matrix, queenSoFar, r);

    return animationsArr;
}

function printNQueens(chess, qsf, row) {
    if (row == chess.length) {
        countOfChessBoards++;
        animationsArr.push([cloneTableOfSizeN, [chess.length, countOfChessBoards, null]]);
        // animationsArr.push([generateTableOfSizeN, [chess.length, countOfChessBoards, null]]);
        return;
    }

    for (let col = 0; col < chess.length; col++) {
        if (chess[row][col] == 0 && isQueenSafe(chess, row, col) == true) {
            chess[row][col] = 1;
            animationsArr.push([addQueen, [row, col, countOfChessBoards]]);

            printNQueens(chess, qsf + row + "-" + col + ",", row + 1);

            chess[row][col] = 0;
            animationsArr.push([removeQueen, [row, col, countOfChessBoards]]);
        }
    }
}

function isQueenSafe(chess, row, col) {
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
        if (chess[i][j] == 1) {
            return false;
        }
    }

    for (let i = row - 1, j = col; i >= 0; i--) {
        if (chess[i][j] == 1) {
            return false;
        }
    }

    for (let i = row - 1, j = col + 1; i >= 0 && j < chess.length; i--, j++) {
        if (chess[i][j] == 1) {
            return false;
        }
    }

    for (let i = row, j = col - 1; j >= 0; j--) {
        if (chess[i][j] == 1) {
            return false;
        }
    }

    return true;
}

export { setCountOfChessBoards, clearAnimationsArr, getAnimationsArr };