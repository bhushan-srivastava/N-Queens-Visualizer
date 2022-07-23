"use strict"

import generateTableOfSizeN from "./GenerateChessBoard.js"; // function to generate a chess board of size n x n
/** PrintNQueens.js
  * setCountOfChessBoards: sets the value of countOfChessBoards in PrintNQueens.js
  * clearAnimationsArr: clears animationsArr in PrintQueens.js
  * getAnimationsArr: function that returns an array of animation functions with parameters to visualize the solution algorithm
 */
import { setCountOfChessBoards, clearAnimationsArr, getAnimationsArr } from "./PrintNQueens.js";
import cloneTableOfSizeN from "./CloneChessBoard.js"; // function to clone a chess board of size n x n

const valueOfNInputElement = document.getElementById("value-of-n"); // Value Of N
const startButton = document.getElementById("start-visualization"); // Start Visualization Button
const nQueensVisualizerSection = document.getElementById("n-queens-visualizer-section"); // N Queens Visualizer Section
const logSection = document.getElementById("log-section"); // Log Section

let n = 0; // Number Of Queens and the Size of the Chess Board
let chess = 0; // matrix representing the chess board of size n x n

/** animationsArr
  * stores cloneTableOfSizeN, addQueen and removeQueen functions and their parameters in the required order for the animation
  * animationsArr = 
    [
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

// event listener for Start Visualization Button
startButton.addEventListener("click", () => {
    if (valueOfNInputElement.value) {
        // disable the Start Visualization Button to prevent multiple clicks
        startButton.setAttribute("disabled", "disabled");

        n = valueOfNInputElement.value;

        makeChessArr(); // inititalize chess to an n x n matrix and make all its elements = 0

        clearNQueensVisualizerSection(); // clear the N Queens Visualizer Section

        resetLogSection(); // reset the Log Section to show only the title "Logs"

        generateTableOfSizeN(n, 1); // display a chess board of size n x n

        setCountOfChessBoards(1); //set countOfChessBoard to 1 in PrintNQueens.js
        clearAnimationsArr(); // clears animationsArr in PrintQueens.js
        animationsArr = getAnimationsArr(chess, "", 0); // function that returns an array of animation functions with parameters to visualize the solution algorithm

        animateNQueens(); // function to visualize the solution algorithm
    }
});

// inititalize chess to an n x n matrix and make all elements = 0
function makeChessArr() {
    chess = new Array(n); // add rows

    // add columns
    for (let i = 0; i < n; i++) {
        chess[i] = new Array(n);
    }

    // initialize all values to 0
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            chess[i][j] = 0;
        }
    }
}

// clear the N Queens Visualizer Section
function clearNQueensVisualizerSection() {
    nQueensVisualizerSection.innerHTML = "";
}

// reset the Log Section to show only the title "Logs"
function resetLogSection() {
    logSection.innerHTML = ""; // delete all the innerHTML of Log Section by making its innerHTML = ""

    const pTag = document.createElement("p"); // create a new <p> tag
    pTag.innerHTML = "Logs"; // <p>Logs</p>

    const hrTag = document.createElement("hr"); // create a new <hr> tag

    pTag.appendChild(hrTag); // <p>Logs <hr></p>

    logSection.appendChild(pTag); // add the <p>Logs <hr></p> to the Log Section
}

// create a delay using promise
function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time)); // the promise is resolved after the given time
}

// visualization of the solution algorithm
async function animateNQueens() {
    /** animationsArr
      * stores cloneTableOfSizeN, addQueen and removeQueen functions and their parameters in the required order for the animation
      * animationsArr = 
        [
            [function1, [parameter1, parameter2,....parameterN]],
            [function2, [parameter1, parameter2,....parameterN]],
                                .
                                .
                                .
                                .
            [functionN, [parameter1, parameter2,....parameterN]]
        ]
     */

    // access each array in animationsArr in the order it is stored in the animationsArr
    for (let functionArr of animationsArr) {
        let animationFunction = functionArr[0]; // animation function
        let args = functionArr[1]; // args of the respective function in animationFunction

        await delay(200); // create a delay to show the animation step-by-step
        animationFunction(...args); // call the function with its respective parameters
    }

    await delay(200); // create a delay after the animation is over 

    startButton.removeAttribute("disabled"); // enable the Start Visualization Button to prevent multiple clicks
}