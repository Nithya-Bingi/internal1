const os = require('os');
const fs = require('fs');
const http = require('http');

// OS Module
console.log("Platform:", os.platform());
console.log("Architecture:", os.arch());
console.log("Hostname:", os.hostname());
console.log("OS Type:", os.type());
console.log("Release:", os.release());
console.log("Total Memory:", os.totalmem());
console.log("Free Memory:", os.freemem());
console.log("Home Directory:", os.homedir());
console.log("Temporary Directory:", os.tmpdir());
console.log("CPU Details:", os.cpus().length);

// FS Module
fs.writeFileSync('sample.txt', 'Hello Node.js!');
console.log("File created successfully.");

const data = fs.readFileSync('sample.txt', 'utf8');
console.log("File Content:", data);

fs.appendFileSync('sample.txt', '\nWelcome to File System Module!');
console.log("Data appended successfully.");

console.log("File Exists:", fs.existsSync('sample.txt'));

// HTTP Module
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end("<h1>Hello World!</h1>");
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});