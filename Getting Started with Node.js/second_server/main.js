const http = require('http');
const httpStatus = require('http-status-codes');
const port = 3000;

const app = http.createServer((req, res) => {
    //Stores the body data of post request in the array.
    var body = [];
    req.on("data", (bodyData) => {
        body.push(bodyData);
    });
    req.on("end", () => {
        body = Buffer.concat(body).toString();
        console.log(`Request Body Contents: ${body}`);
    });
    // POST data storing ends

    res.writeHead(httpStatus.OK, {
        'Content-Type': 'text/html'
    });

    // Routes

    const routeResponseMap = {
        "/info": "<h1>Info Page</h1>",
        "/contact": "<h1>Contact Us</h1>",
        "/about": "<h1>Learn More About Us.</h1>",
        "/hello": "<h1>Say hello by emailing us here</h1>",
        "/error": "<h1>Sorry the page you are looking for is not here.</h1>"
    };
    if (routeResponseMap[req.url]) {
        // res.end(routeResponseMap[req.url]);
        // Delay the route response by 2 sec
        setTimeout(() => res.end(routeResponseMap[req.url]), 2000);
    }

    // console.log(req.method);
    // console.log(req.url);
    // let responseMessage = "<h1>This will show on the screen</h1>";
    // res.write(responseMessage);
    // res.end();
});
app.listen(port);