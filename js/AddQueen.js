"use strict"

const logSection = document.getElementById("log-section"); // Log Section
const queenEmoji = "&#9813;"; // html emoji code for a crown emoji

/** addQueen(row, col, count)
  * display the queenEmoji at the specified location
  * row: the row in the table where the queenEmoji is to be displayed
  * col: the column in the table where the queenEmoji is to be displayed
  * count: table number where the queenEmoji is to be dispalyed
 */
export default function addQueen(row, col, count) {
  // get the table cell by it id Eg. id = "table-1-row-1-col-1" will get the cell at the top left corner in the first table
  const cell = document.getElementById("table-" + count + "-row-" + (row + 1) + "-col-" + (col + 1));
  cell.innerHTML = queenEmoji; // display the queenEmoji in the cell

  const pTag = document.createElement("p"); // create a new <p> tag for the Log Section
  pTag.innerHTML = "Add Queen at position " + (row + 1) + "," + (col + 1) + " on Board Number " + count; // add the contents of the <p> tag
  pTag.setAttribute("class", "green-background"); // add a class of green-background to the <p> tag
  logSection.appendChild(pTag); // add the <p> tag to the Log Section

  // scroll to the bottom of the Log Section to see the new log
  scrollToBottom(logSection);
}

// scroll to the bottom of a section
function scrollToBottom(node) {
  node.scrollTop = node.scrollHeight;
}