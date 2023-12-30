const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/home") {
    res.write("<h1>Welcome to home page</h1>");
    res.end();
  } else if (url === "/about") {
    res.write("<h1>Welcome to about pahe</h1>");
    res.end();
  } else if (url === "/node") {
    res.write("<h1>Welcome to node page</h1>");
    res.end();
  } else {
    res.write("<h1>Welcome to my page</h1>");
    res.end();
  }
});

server.listen(4000);
