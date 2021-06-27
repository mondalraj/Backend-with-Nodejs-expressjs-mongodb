const http = require('http');
const httpStatus = require('http-status-codes');
const port = 3000;

app = http.createServer((req, res) => {
    console.log("Receiving an incomming request...");
    res.writeHead(httpStatus.OK, { 'Content-Type': 'text/html'});

    let responseMessage = "<h1>Hellow Universe!  </h1>";
    res.write(responseMessage);
    res.end();
    console.log(`Sent a response: ${responseMessage}`);
});
app.listen(port);
console.log(`The Server is listening on port ${port}`);