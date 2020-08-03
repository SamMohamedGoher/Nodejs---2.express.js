const express = require(`express`);
const path = require(`path`);
const { Router } = require("express");
const router = express.Router();

router.get(`/sendMessage`, (req, res, next) => {
  res.sendFile(path.join(__dirname, `../views/sendMessage.html`));
});

router.post(`/sendMessage`, (req, res) => {
  const message = req.body.message;
  res.send(`<h1>this is your message: ${message}</h1>`);
});

module.exports = router;