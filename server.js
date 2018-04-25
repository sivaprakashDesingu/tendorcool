const express = require('express');
const app = express();
const path = require(path);

app.use(express.static(_dirname+ '/dist'));
app.listern(process.en.PORT || 8080);

//Path local

app.get('/*', function(req,res){
     res.sendFile(path.join(_dirname + '/dist/index.html'))   ;
})

console.log("console listerning !!!");