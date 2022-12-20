
const express=require('express');
var https = require('https');
var fs = require('fs');

const cors=require('cors')
const app=express();

var options = {
    key: fs.readFileSync('../ssl/privatekey.key'),
    cert: fs.readFileSync('../ssl/certificate.pem'),   
};

app.use(express.json());

let corOption ={
    origin:['https://rslsofttech.com','https://rslsofttech.com/admin','https://admin.rslsofttech.com','https://cicd.rslsofttech.com'],
    methods:["GET","POST","PUT","DELETE"],
  }
  app.use(cors(corOption));

  app.options('*', cors());

  app.use(indexrouter)

app.get("/cicd", (req, res) => {
  res.send(
    `<h1 style='text-align: center'>
          Wellcome to my first Automatic Deployment With Github Actions
          <br><br>
          <b style="font-size: 182px;">😃👻</b>
      </h1>`
  );
});

https.createServer(options, app).listen(9000,() => console.log("App running in port 9000 !"));
