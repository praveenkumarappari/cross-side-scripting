const express = require("express");
let app = new express();

app.get("/", function(req, res) {
    console.log(req.body)
    res.send("Hello, from Node Sample.");
	//res.status(200).sendFile('login.html', { root: req.join(__dirname, '../client/') });
});

app.use(express.static('../client/', {index: 'index.html'}));

app.get("/about", function(req, res) {
    res.send("About this web app.");
});

app.get("/contact", function(req, res) {
    console.log("server-side");
    res.send("@Praveen");
});

app.get("*", function(req, res) {
    res.send("Bud, you're lost.");
});

app.all("*", function(req, res) {
    res.send("What're you trying to do?");
});

app.all("/login", function(req, res) {
    console.log("test")
    res.send("What're you trying to do?");
});

app.post("/limeIn", function(req, res) {
    res.send(req.name);
});

app.get("/limeIn", function(req, res) {
    res.send("Kosk");
});

let port = 8081;
app.listen(port, function() {
    console.log("Server started listening at localhost:" + port);
});

// let http = require('http');
// let fs = require('fs');
 
// let handleRequest = (request, response) => {
//     response.writeHead(200, {
//         'Content-Type': 'text/html'
//     });
//     fs.readFile('./Altoro Mutual.html', null, function (error, data) {
//         if (error) {
//             response.writeHead(404);
//             respone.write('Whoops! File not found!');
//         } else {
//             response.write(data);
//         }
//         response.end();
//     });
// };
 
// http.createServer(handleRequest).listen(8080);