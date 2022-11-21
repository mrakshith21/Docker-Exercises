const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200)
    res.end('Hello, you are visiting a node js application running on docker')
}).listen(8000, () => {
    console.log("Starting application on port 8000")
})

