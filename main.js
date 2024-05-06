const fs = require("fs");

function printFileContents() {
  // Check if the command-line argument is provided
  if (process.argv.length !== 3) {
    console.error("Usage: node read_file.js <file_path>");
    process.exit(1);
  }

  // Get the file path from the command-line argument
  const filePath = process.argv[2];

  // Read the file
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      if (err.code === "ENOENT") {
        console.error(`Error: File '${filePath}' not found.`);
      } else {
        console.error(`Error reading file: ${err.message}`);
      }
      process.exit(1);
    }
    // Print file contents
    console.log(data);
  });
}

printFileContents();
// TODO: Call printFileContents with the command-line argument
