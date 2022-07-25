"use strict"

const logSection = document.getElementById("log-section"); // Log Section

/**
 * Remove the queenEmoji at the specified location
 * @param {Number} row The row in the table where the queenEmoji is to be removed
 * @param {Number} col The column in the table where the queenEmoji is to be removed
 * @param {Number} tableNumber Table number where the queenEmoji is to be removed
 */
export default function removeQueen(row, col, tableNumber) {
  // get the table cell by it id Eg. id = "table-1-row-1-col-1" will get the cell at the top left corner in the first table
  const cell = document.getElementById("table-" + tableNumber + "-row-" + (row + 1) + "-col-" + (col + 1));
  cell.innerHTML = ""; // remove the queenEmoji from the cell

  const pTag = document.createElement("p");// create a new <p> tag for the Log Section
  pTag.innerHTML = "Remove the Queen at position " + (row + 1) + "," + (col + 1) + " on Board Number " + tableNumber;// add the contents of the <p> tag
  pTag.setAttribute("class", "red-background");// add a class of red-background to the <p> tag
  logSection.appendChild(pTag);// add the <p> tag to the Log Section

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
