const fs = require('fs');

// Read the data.json file asynchronously (readFile)
fs.readFile('data.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

  // Parse the JSON string into a JavaScript object
  const products = JSON.parse(data);

  // Display the data in the console
  console.log(products);
});