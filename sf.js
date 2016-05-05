var express = require('express');
var app = express();
var fs = require('fs')
var path = require('path')


app.get('/', function (req, res) {
  fs.readFile(path.join(__dirname+'/sf.html'), 'utf8', function (err,data) {
    if (err)return console.log(err);
    return res.send(data.replace(`'sf-001.mp4'`,`'sf-001.mp4'`));
  });
  return res.Send("Something isn't right here...");
});


app.get('/:file', function (req, res) {
  res.sendFile(path.join(`${__dirname}/${req.params.file}`));
});

var PORT = 3000;
app.listen(PORT, function () {
  console.log(`App listening on port ${PORT}!`);
});
