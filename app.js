const express = require(`express`);
const path = require(`path`);
const bodyParser = require(`body-parser`);
const home = require(`./routes/home`);
const sendMessage = require(`./routes/sendMessage`);
const pnf = require(`./routes/404`);
const { static } = require("express");
const port = process.env.PORT || 3000;
const app = express();

app.use(express.static(`public`));
app.use(bodyParser.urlencoded({extended: true}));
app.use(home);
app.use(sendMessage);
app.use(pnf);
app.use((req, res) => {
  res
    .status(404)
    .redirect(`/404`);
});

app.listen(port, console.log(`listening to port ${port} ...`));