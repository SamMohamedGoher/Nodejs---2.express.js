const express = require(`express`);
const path = require(`path`);
const router = express.Router();

router.get(`/404`, (req, res) => {
  res
    .status(404)
    .sendFile(path.join(__dirname, `../views/404.html`));
});

module.exports = router;