"use strict"

/** Algorithm Visualizer Section */
const algorithmVisualizerSection = document.getElementById("algorithm-visualizer-section");
/** N Queens Visualizer Section */
const nQueensVisualizerSection = document.getElementById("n-queens-visualizer-section");
/** Log Section */
const logSection = document.getElementById("log-section");

/**
 * Clone the last chess board in the N Queens Visualizer Section and display it
 * @param {Number} n Size of the chess board
 * @param {Number} tableNumber table number for the cloned table (used to assign a new id to the cloned table)
 */
export default function cloneTableOfSizeN(n, tableNumber) {
    // get the last table and store it
    const node = nQueensVisualizerSection.lastChild;

    // clone the table stored in node with a deep copy i.e. clone all the descendants of the table
    const tbl = node.cloneNode(true);
    // assign a new id to the cloned <table> element
    tbl.setAttribute("id", "chess-board-" + tableNumber);

    // get the old table's <caption> and store it
    const tblOldCaption = tbl.firstChild;

    // create a new <caption> tag for the cloned <table>
    const tblNewCaption = document.createElement("caption");
    // add the contents of the new <caption>t tag
    tblNewCaption.innerHTML = "Chessboard - " + tableNumber + " of size " + n + " x " + n;
    // replace the old caption with the new caption
    tbl.replaceChild(tblNewCaption, tblOldCaption);

    // get the <tbody> of the cloned table and store it
    const tblBody = tbl.childNodes[1];
    // get a list of all the <tr> tags in the table
    const rows = tblBody.childNodes;
    // create a new array to store a list of all <td> tags for each <tr> tag
    const cells = new Array();

    // get each row (in the rows list) and assign a new id to it
    for (let i = 0; i < rows.length; i++) {

        //get each row and store it
        const row = rows[i];
        // assign a new id to each row
        row.setAttribute("id", "table-" + tableNumber + "-row-" + (i + 1));

        // add the list of <td> tags for each row in cells array
        cells.push(row.childNodes)
    }

    // get each <td> tag and assign a new id to it
    for (let i = 0; i < rows.length; i++) {
        // get list of <td> tags for the ith row and store it
        const tdArr = cells[i];
        // get each <td> tag in the tdArr and assign a new id to it
        for (let j = 0; j < tdArr.length; j++) {
            tdArr[j].setAttribute("id", "table-" + tableNumber + "-row-" + (i + 1) + "-col-" + (j + 1));
        }
    }

    // add the cloned chess board to the // N Queens Visualizer Section
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