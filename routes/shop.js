const express = require("express");
const path = require('path');
const fs = require("fs");

const rootDir = require('../util/path');

const router = express.Router();

router.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'shop.html'))
});


router.get("/contactus", (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'contact.html'))

});

router.post("/success", (req, res, next) => {
  console.log(req.body);
  res.sendFile(path.join(rootDir, 'views', 'success.html'))

});

module.exports = router;
