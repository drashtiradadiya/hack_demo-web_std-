// Import JSDOM
const { JSDOM } = require("jsdom");

// Create a virtual DOM
const dom = new JSDOM(`<!DOCTYPE html><html><body><div id="enrollment_No"></div></body></html>`);

// Access the window object
const window = dom.window;

// Access the document object
const document = window.document;

const enroll=document.getElementById("enrollment_No").value;
console.log("hii drashti")
module.exports = {
   enroll,
 }
 