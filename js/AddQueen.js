"use strict"

const logSection = document.getElementById("log-section"); // Log Section
const queenEmoji = "&#9813;"; // HTML queen emoji hex-code

export default function addQueen(row, col, count) {
    const cell = document.getElementById("table-" + count + "-row-" + (row + 1) + "-col-" + (col + 1));
    cell.innerHTML = queenEmoji;

    const pTag = document.createElement("p");
    pTag.innerHTML = "Add Queen at position " + (row + 1) + "," + (col + 1) + " on Board Number " + count;
    pTag.setAttribute("class", "green-background");
    logSection.appendChild(pTag);
}