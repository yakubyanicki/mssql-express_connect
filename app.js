const express = require(`express`);
const app = express();
const sql = require(`./dboperation`);

app.listen(3000);
//console.log(__dirname+`/index.html`)

app.get(`/`, (req,res) => {
  
  sql.getdata().then((result) => {
    res.json(result);
  })
  //sql.getdata()

})