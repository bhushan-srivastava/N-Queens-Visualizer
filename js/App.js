"use strict"

import generateTableOfSizeN from "/js/GenerateChessBoard.js";
import { setCountOfChessBoards, clearAnimationsArr, getAnimationsArr } from "/js/PrintNQueens.js";
import cloneTableOfSizeN from "/js/CloneChessBoard.js";

const valueOfNInputElement = document.getElementById("value-of-n"); // Value Of N
const startButton = document.getElementById("start-visualization"); // Start Visualization Button
const nQueensVisualizerSection = document.getElementById("n-queens-visualizer-section");
const logSection = document.getElementById("log-section"); // Log Section

let n = 0; // Number Of Queens and the Size of the Chess Board
let chess = 0;

let animationsArr = new Array();

// event listener for Start Visualization Button
startButton.addEventListener("click", () => {
    if (valueOfNInputElement.value) {

        n = valueOfNInputElement.value;

        makeChessArr();

        clearNQueensVisualizerSection();

        resetLogSection();

        generateTableOfSizeN(n, 1, null);

        setCountOfChessBoards(1);
        clearAnimationsArr();
        animationsArr = getAnimationsArr(chess, "", 0);

        animateNQueens();
    }
});

function makeChessArr() {
    chess = new Array(n);

    for (let i = 0; i < n; i++) {
        chess[i] = new Array(n);
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            chess[i][j] = 0;
        }
    }
}

function clearNQueensVisualizerSection() {
    nQueensVisualizerSection.innerHTML = "";
}

function resetLogSection() {
    logSection.innerHTML = "";
    const pTag = document.createElement("p");
    pTag.innerHTML = "Logs";
    logSection.appendChild(pTag);
}


function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

async function animateNQueens() {
    // generateTableOfSizeN, addQueen, removeQueen

    /*animationsArr
    [
        [fun, [params]],
        [fun, [params]],
    ]*/

    for (let functionArr of animationsArr) {
        await delay(200);
        functionArr[0](functionArr[1][0], functionArr[1][1], functionArr[1][2]);
    }
}