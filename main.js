function printFileContents(filePath) {
  // Check if the command-line argument is provided
  if (!filePath) {
    console.error(
      "Invalid usage. Please provide a file path as a command-line argument."
    );
    return;
  }

  // Read the file contents
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error(`Error reading file: ${err.message}`);
      return;
    }

    // Print the file contents to the console
    console.log(data);
  });
}

// Retrieve command-line argument
const filePath = process.argv[2];

// Call printFileContents with the command-line argument
printFileContents(filePath);
