const fs = require("fs");

function printFileContents(filePath) {
  // TODO: Use fs.readFile to read the file contents
  fs.readFile("./output.txt", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  });
}

printFileContents();
// TODO: Call printFileContents with the command-line argument
