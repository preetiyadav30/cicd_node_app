const express = require("express");
const cors = require("cors");
const fs = require("fs")
const https = require("https");
const app = express();
const port = 9000;
var options = {
  key: fs.readFileSync('./ssl/privatekey.key'),
  cert: fs.readFileSync('./ssl/certificate.pem'),
 
};
app.use(express.json());
app.use(cors({ origin: true }));

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.get("/cicdpipeline", (req, res) => {
  res.send(
    `<h1 style='text-align: center'>
          Wellcome to RSL Backend 
          <br><br>
          <b style="font-size: 182px;">😃👻</b>
      </h1>`
  );
});

https.createServer(options, app).listen(9000,() => console.log("App running in port 9000 !"));