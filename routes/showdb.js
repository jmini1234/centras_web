
var express    = require('express');
var mysql      = require('mysql');
var dbconfig   = require('./config/database.js');
var connection = mysql.createConnection(dbconfig);
/////////////branch 확인용
var app = express();

// configuration ===============================================================
app.set('port', process.env.PORT || 3000);

app.get('/', function(req, res){
  res.send('Root');
});

app.get('/size', function(req, res){

  connection.query('SELECT * from size_statistic', function(err, rows) {
    if(err) throw err;

    console.log('The solution is: ', rows);
    res.send(rows);
  });
});

app.get('/temp', function(req, res){

  connection.query('SELECT * from temperature', function(err, rows) {
    if(err) throw err;

    console.log('The solution is: ', rows);
    res.send(rows);
  });
});


app.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
