"use strict"

const nQueensVisualizerSection = document.getElementById("n-queens-visualizer-section");
const logSection = document.getElementById("log-section"); // Log Section

export default function cloneTableOfSizeN(n, count, tempParameter) {
    // create a <table> element and a <tbody> element
    const node = nQueensVisualizerSection.lastChild;

    const tbl = node.cloneNode(true);
    tbl.setAttribute("id", "chess-board-" + count);

    const tblOldCaption = tbl.firstChild;

    const tblNewCaption = document.createElement("caption");
    tblNewCaption.innerHTML = "Chessboard - " + count + " of size " + n + " x " + n;
    tbl.replaceChild(tblNewCaption, tblOldCaption);

    //error start
    const tblBody = tbl.childNodes[1];
    const rows = tblBody.childNodes;
    const cells = new Array();

    // console.log("tblBody is = ");
    // console.log(tblBody);

    // console.log("rows is = ");
    // console.log(rows);

    for (let i = 0; i < rows.length; i++) {

        // console.log("i is = " + i);

        const row = rows[i];
        row.setAttribute("id", "table-" + count + "-row-" + (i + 1));

        // console.log("row.setAttribute('id','table-'" + count + "'-row-'" + (i + 1));

        // console.log("row is = ");
        // console.log(row);

        cells.push(row.childNodes)

        // console.log("cells is = ");
        // console.log(cells);
    }

    for (let i = 0; i < rows.length; i++) {
        const cell = cells[i];
        for (let j = 0; j < cell.length; j++) {

            // console.log("j is = " + j);



            // console.log("cell is = ");
            // console.log(cell);

            cell[j].setAttribute("id", "table-" + count + "-row-" + (i + 1) + "-col-" + (j + 1));

            // console.log("cell.setAttribute('id', table-" + count + "-row-" + (i + 1) + "-col-" + (j + 1));
        }

    }
    //error end

    // tbl.replaceChild(tblNewBody, tblOldBody);

    nQueensVisualizerSection.appendChild(tbl);

    const pTag = document.createElement("p");
    pTag.setAttribute("class", "blue-background");
    pTag.innerHTML = "Add Chess Board Number - " + count;
    logSection.appendChild(pTag);
}