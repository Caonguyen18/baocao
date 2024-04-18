const http = require('http')

const server = http.createServer((req, res) => {
    console.log('run request....')
    res.setHeader('content-Type', 'text/html')
    res.write("<h3>LLLLLLLLLLLLLLLLLLLl<h3>")
    res.end()
})

server.listen(3000, 'localhost', () => {
    console.log('port: 3000')
})