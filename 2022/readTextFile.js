import fs from 'fs';

// Function to read the text file
export function readTextFile(filePath) {
  // Use the fs module to read the file
  return fs.readFileSync(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    return data;
  });
}
