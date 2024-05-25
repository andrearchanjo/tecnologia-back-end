const http = require('http');

const HOSTNAME = '127.0.0.1';
const PORT = 3000;
const CONTENT_TYPE = 'Content-Type';
const TEXT_PLAIN = 'text/plain';
const RESPONSE_MESSAGE = "Hello World!";
const SERVER_RUNNING_MESSAGE = `O servidor está sendo executado em http://${HOSTNAME}:${PORT}/`;

const requestHandler = (req, res) => {
    res.writeHead(200, {
        [CONTENT_TYPE]: TEXT_PLAIN
    });
    res.end(RESPONSE_MESSAGE);
};

const server = http.createServer(requestHandler);

server.listen(PORT, HOSTNAME, () => {
    console.log(SERVER_RUNNING_MESSAGE);
});