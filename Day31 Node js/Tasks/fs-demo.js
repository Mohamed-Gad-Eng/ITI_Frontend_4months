const fs = require('fs');

fs.writeFileSync('notes.txt', 'Hello World')

console.log("finish writing");


fs.appendFileSync('notes.txt', '\nAppended text: Hello Everyone')
console.log("appended to file");

const data = fs.readFileSync('notes.txt', "utf-8")
console.log(data);


fs.renameSync("./notes.txt", "./notes-final.txt")
console.log('File renamed successfully!');



// fs.unlinkSync(filePath);
//   console.log('File deleted successfully!');


// it handles both files and directories and can ignore errors if the file doesn't exist.
try {
    fs.rmSync("./notes-final.txt", { force: true })
    console.log('File deleted successfully!');
} catch (err) {
    console.error('An error occurred:', err);
}