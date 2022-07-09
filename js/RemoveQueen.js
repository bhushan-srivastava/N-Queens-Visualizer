"use strict"

const logSection = document.getElementById("log-section"); // Log Section

export default function addQueen(row, col, count) {
    const cell = document.getElementById("table-" + count + "-row-" + (row + 1) + "-col-" + (col + 1));
    cell.innerHTML = "";

    const pTag = document.createElement("p");
    pTag.innerHTML = "Remove Queen at position " + (row + 1) + "," + (col + 1) + " on Board Number " + count;
    pTag.setAttribute("class", "red-background");
    logSection.appendChild(pTag);
}