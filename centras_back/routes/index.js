module.exports = (app) => {
	var express = require('express');
	var router = express.Router();
	var mysql = require('mysql');

// var conn = mysql.createConnection(dbOptions);

/* GET home page. */
	router.get('/', function(req, res, next) {
		res.render("index",{title:"jminii_port_page"});

		// var query = conn.query('select * from user',function(err,rows){
		// 			console.log(rows);
		// 			res.json(rows);
		// 	});
	});
		return router
	//other js file can use db (conn)
}
// module.exports = router;
