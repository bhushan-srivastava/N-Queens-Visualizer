"use strict"

/** Algorithm Visualizer Section */
const algorithmVisualizerSection = document.getElementById("algorithm-visualizer-section");
/** N Queens Visualizer Section */
const nQueensVisualizerSection = document.getElementById("n-queens-visualizer-section");
/** Log Section */
const logSection = document.getElementById("log-section");

/**
 * Display a chess board of size n x n and display it in the N Queens Visualizer Section
 * @param {Number} n Size of the chess board
 * @param {Number} tableNumber Table number for the new table (used to assign an id to the new table)
 */
export default function generateTableOfSizeN(n, tableNumber) {
    // create a <table> element
    const tbl = document.createElement("table");
    // assign a new id to it
    tbl.setAttribute("id", "chess-board-" + tableNumber);

    // create a new <caption> element
    const tblCaption = document.createElement("caption");
    // assign a new id to it
    tblCaption.innerHTML = "Chessboard - " + tableNumber + " of size " + n + " x " + n;
    // add the <caption> tag to the <table> tag
    tbl.appendChild(tblCaption);

    // create a <tbody> element
    const tblBody = document.createElement("tbody");

    // create all n rows and n columns of the chess board
    for (let i = 0; i < n; i++) {
        // create a table row
        const row = document.createElement("tr");
        // assign a new id to it
        row.setAttribute("id", "table-" + tableNumber + "-row-" + (i + 1));

        // create n columns in the ith row
        for (let j = 0; j < n; j++) {
            // create a <td> element
            const cell = document.createElement("td");
            // assign a new id to it
            cell.setAttribute("id", "table-" + tableNumber + "-row-" + (i + 1) + "-col-" + (j + 1));

            // add the <td> at the end of the table row
            row.appendChild(cell);
        }

        // add the row to the end of the table body
        tblBody.appendChild(row);
    }

    // add the <tbody> to the <table>
    tbl.appendChild(tblBody);

    // add the <table> to the N Queens Visualizer Section
    nQueensVisualizerSection.appendChild(tbl);

    // create a new <p> tag
    const pTag = document.createElement("p");
    // add a class "blue-background" to it
    pTag.setAttribute("class", "blue-background");
    // add the contents of the <p> tag
    pTag.innerHTML = "Add Chess Board Number - " + tableNumber;
    // add the <p> tag to the Log Section
    logSection.appendChild(pTag);

    // scroll to the bottom of the Algorithm Visualizer Section to see the new chess board
    scrollToBottom(algorithmVisualizerSection);

    // scroll to the bottom of the Log Section to see the new log
    scrollToBottom(logSection);
}

/**
 * Scroll to the bottom of the given node
 * @param {HTMLElement} node
 */
function scrollToBottom(node) {
    node.scrollTop = node.scrollHeight;
}