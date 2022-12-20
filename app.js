const express = require("express");
const app = express();
app.get("/", (req, res) => {
    res.send(
      `<h1 style='text-align: center'>
            Wellcome to Nodejs 
            <br><br>
            <b style="font-size: 182px;">😃👻</b>
        </h1>`
    );
  });
app.listen(9000,()=>{console.log("db connected")})