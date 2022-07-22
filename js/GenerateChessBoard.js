"use strict"

const algorithmVisualizerSection = document.getElementById("algorithm-visualizer-section"); // Algorithm Visualizer Section
const nQueensVisualizerSection = document.getElementById("n-queens-visualizer-section"); // N Queens Visualizer Section
const logSection = document.getElementById("log-section"); // Log Section

/** generateTableOfSizeN(n, count)
  * display a chess board of size n x n and display it in the N Queens Visualizer Section
  * n: size of the chess board
  * count: table number for the new table (used to assign an id to the new table)
  */
export default function generateTableOfSizeN(n, count) {
    // create a <table> element
    const tbl = document.createElement("table");
    // assign a new id to it
    tbl.setAttribute("id", "chess-board-" + count);

    // create a new <caption> element
    const tblCaption = document.createElement("caption");
    // assign a new id to it
    tblCaption.innerHTML = "Chessboard - " + count + " of size " + n + " x " + n;
    // add the <caption> tag to the <table> tag
    tbl.appendChild(tblCaption);

    // create a <tbody> element
    const tblBody = document.createElement("tbody");

    // create all n rows and n columns of the chess board
    for (let i = 0; i < n; i++) {
        // create a table row
        const row = document.createElement("tr");
        // assign a new id to it
        row.setAttribute("id", "table-" + count + "-row-" + (i + 1));

        // create n columns in the ith row
        for (let j = 0; j < n; j++) {
            // create a <td> element
            const cell = document.createElement("td");
            // assign a new id to it
            cell.setAttribute("id", "table-" + count + "-row-" + (i + 1) + "-col-" + (j + 1));

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
    pTag.innerHTML = "Add Chess Board Number - " + count;
    // add the <p> tag to the Log Section
    logSection.appendChild(pTag);

    // scroll to the bottom of the Algorithm Visualizer Section to see the new chess board
    scrollToBottom(algorithmVisualizerSection);

    // scroll to the bottom of the Log Section to see the new log
    scrollToBottom(logSection);
}

// scroll to the bottom of a section
function scrollToBottom(node) {
    node.scrollTop = node.scrollHeight;
}