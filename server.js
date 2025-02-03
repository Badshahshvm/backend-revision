const fs = require("fs");
const path = require("path");

const fileDir = path.join(__dirname, "files");

// Ensure the directory exists
if (!fs.existsSync(fileDir)) {
              fs.mkdirSync(fileDir);
}

fs.writeFileSync("apple.txt", "hello , I am Apple");
console.log(process.argv);

const input = process.argv;

if (input[2] === "add") {
              const filePath = path.join(fileDir, input[3]); // Safer path handling
              fs.writeFileSync(filePath, input[4]);
              console.log(`File '${input[3]}' created successfully inside 'files' folder.`);
}
