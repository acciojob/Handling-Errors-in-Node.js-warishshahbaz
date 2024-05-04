const fs = require("fs");

function printFileContents(filePath) {
  // TODO: Use fs.readFile to read the file contents
  fs.readFile("./output", () => {
    console.log("File contents");
  });
}

printFileContents();
// TODO: Call printFileContents with the command-line argument
