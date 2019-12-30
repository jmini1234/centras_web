var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var dbConfig = require('./dbConfig');

var dbOptions = {
	user: dbConfig.host,
	password: dbConfig.password,
	database: dbConfig.database
};

var conn = mysql.createConnection(dbOptions);

/* GET home page. */
router.get('/', function(req, res, next) {
	res.send('<a href="/users/login">login</a>');
});

//other js file can use db (conn)
module.exports =	{
	conn: conn
}
module.exports = router;
