const fs = require("fs");

function printFileContents(filePath) {
  // TODO: Use fs.readFile to read the file contents
  if (process.argv.length !== 3) {
    console.error("Usage: node read_file.js <file_path>");
    process.exit(1);
  }

  const filePath = process.argv[2];

  // Read the file asynchronously
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      if (err.code === "ENOENT") {
        console.error("Error: File not found");
      } else {
        console.error("Error reading file:", err.message);
      }
    } else {
      console.log("File content:");
      console.log(data);
    }
  });
}

printFileContents();
// TODO: Call printFileContents with the command-line argument
