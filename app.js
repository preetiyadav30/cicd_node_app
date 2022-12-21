import express from 'express';

import cors from 'cors';
import fs from 'fs'
import https from 'https'

const app = express()

const PORT = 9000;

var options = {
    key: fs.readFileSync('../ssl/privatekey.key'),
    cert: fs.readFileSync('../ssl/certificate.pem')
};

app.use(cors({ origin: true }));

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});


<<<<<<< HEAD
// simple route
app.get("/", (req, res) => {
  res.send(
    `<h1 style='text-align: center'>
          Wellcome to Automatic Deployment With Github Actions
=======
  app.use(indexrouter)

app.get("/", (req, res) => {
  res.send(
    `<h1 style='text-align: center'>
          Wellcome to my first Automatic Deployment With Github Actions and aapanel
>>>>>>> 77ef77c64b466752cc32adab438aec988cab3fe0
          <br><br>
          <b style="font-size: 182px;">😃👻</b>
      </h1>`
  );
});

https.createServer(options, app).listen(9000,() => console.log("App running in port 9000 !"));

