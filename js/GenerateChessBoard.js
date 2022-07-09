"use strict"

const nQueensVisualizerSection = document.getElementById("n-queens-visualizer-section");
const logSection = document.getElementById("log-section"); // Log Section

export default function generateTableOfSizeN(n, count, tempParameter) {
    // create a <table> element and a <tbody> element
    const tbl = document.createElement("table");
    tbl.setAttribute("id", "chess-board-" + count);

    const tblCaption = document.createElement("caption");
    tblCaption.innerHTML = "Chessboard - " + count + " of size " + n + " x " + n;
    tbl.appendChild(tblCaption);

    const tblBody = document.createElement("tbody");

    // create all cells
    for (let i = 0; i < n; i++) {
        // create a table row
        const row = document.createElement("tr");
        row.setAttribute("id", "table-" + count + "-row-" + (i + 1));

        for (let j = 0; j < n; j++) {
            // Create a <td> element and put the <td> at the end of the table row
            const cell = document.createElement("td");
            cell.setAttribute("id", "table-" + count + "-row-" + (i + 1) + "-col-" + (j + 1));

            row.appendChild(cell);
        }

        // add the row to the end of the table body
        tblBody.appendChild(row);
    }

    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);

    nQueensVisualizerSection.appendChild(tbl);

    const pTag = document.createElement("p");
    pTag.setAttribute("class", "blue-background");
    pTag.innerHTML = "Add Chess Board Number - " + count;
    logSection.appendChild(pTag);
}