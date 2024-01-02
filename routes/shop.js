const express = require("express");
const fs = require("fs");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.send(
    `<p>${fs.readFileSync(
      "message.txt",
      "utf8"
    )}<form action="/" method="POST" onSubmit="document.getElementById('username').value=localStorage.getItem('username')"><input type="text" name="message"/><input type="hidden" id="username" name="username"><button type="submit">Send</button>`
  );
});

router.post("/", (req, res, next) => {
  console.log(req.body);
  const data = `${req.body.username} : ${req.body.message}`;
  fs.appendFile("message.txt", data + "\n", "utf8", (err) => {
    console.log("Data appended to file successfully");
    res.redirect("/");
  });
});

router.get("/login", (req, res, next) => {
  res.send(
    '<form onsubmit="localStorage.setItem(`username`, document.getElementById(`username`).value)" action="/user" method="POST"><input id="username" type="text" name="username"><br><button type="submit">Login</button></form> '
  );
});

router.post("/user", (req, res, next) => {
  console.log(req.body);

  res.redirect("/");
});

module.exports = router;
