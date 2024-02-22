// Import JSDOM
const { JSDOM } = require("jsdom");

// Create a virtual DOM
const dom = new JSDOM(`<!DOCTYPE html><html><body><div id="enrollment_No"></div><button id="submit"></button></body></html>`);

// Access the window object
const window = dom.window;
let enroll;
// Access the document object
const document = window.document;

// Access the submit button directly
const submitButton = document.getElementById('submit');
submitButton.addEventListener('click', function() {
    enroll = document.getElementById("enrollment_No").value;
    console.log('Enrollment Number:', enroll);
    alert('Button clicked!');
});

// Export enroll
module.exports = {
    enroll,
};
