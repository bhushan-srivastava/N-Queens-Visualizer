"use strict"

/** Log Section */
const logSection = document.getElementById("log-section");
/** html emoji code for a crown emoji */
const queenEmoji = "&#9813;";

/**
 * Display the queenEmoji at the specified location
 * @param {Number} row Row where the queen is supposed to be added
 * @param {Number} col Column where the queen is supposed to be added
 * @param {Number} tableNumber Table number where the queen is supposed to be added
 */
export default function addQueen(row, col, tableNumber) {
  // get the table cell by it id Eg. id = "table-1-row-1-col-1" will get the cell at the top left corner in the first table
  const cell = document.getElementById("table-" + tableNumber + "-row-" + (row + 1) + "-col-" + (col + 1));
  cell.innerHTML = queenEmoji; // display the queenEmoji in the cell

  const pTag = document.createElement("p"); // create a new <p> tag for the Log Section
  pTag.innerHTML = "Add a Queen at position " + (row + 1) + "," + (col + 1) + " on Board Number " + tableNumber; // add the contents of the <p> tag
  pTag.setAttribute("class", "green-background"); // add a class of green-background to the <p> tag
  logSection.appendChild(pTag); // add the <p> tag to the Log Section

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
