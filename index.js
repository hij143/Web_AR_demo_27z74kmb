// Create the HTML elements needed for a card
const div = document.createElement("div");
const h4 = document.createElement("h4");
const a = document.createElement("a");
const img = document.createElement("img");

// find the body element so that the newly created eoements
// can be appended to it
const body = document.querySelector("body");

// Append the elements to the DOM

// add the div to the body
body.append(div);
// Add the anchor tag inside of the h4
h4.append(a);
// Add the h4 inside the div
div.append(h4);
// Add the img inside the div
div.append(img);
