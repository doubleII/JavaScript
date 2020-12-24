const http = require("http");

const host = 'localhost';
const port = 8000;

/*
const requestListener = function (req, res) {
	res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    res.end(`{"message": "This is a JSON response"}`);
};

const server = http.createServer(requestListener);
*/

const server = http.createServer(function (req, res) {
	res.setHeader("Content-Type", "application/json");
    res.writeHead(200); // code 200 site is found
    res.end(`{"message": "This is a JSON response"}`);
});

server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});