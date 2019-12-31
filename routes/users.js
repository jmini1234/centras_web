module.exports = (app) => {
  var express = require('express');
  var router = express.Router();
  var mysql = require('mysql');
  var dbOptions = require('./index.js');
  var crypto = require('crypto');


  /* GET users listing. */

  // url: user/login
  // user와 관련된 내용만 한 파일에 존재

  const conn = app.get('pool')

  router.get('/sign_up', function(req, res, next) {
     res.render('users/sign_up');
  });

  router.post('/sign_up', async function (req,res) {
    let body = req.body;

    let inputPassword = body.password;
    let salt = Math.round((new Date().valueOf() * Math.random())) + "";
    let hashPassword = crypto.createHash("sha512").update(inputPassword + salt).digest("hex");

    let user = {
      "ID":req.body.userid,
      "Password":hashPassword,
      "Name":req.body.username,
      "Email":req.body.useremail,
      "Phone":req.body.userphone,
      "Github":req.body.usergithub,
      "Blog":req.body.userblog,
      "Salt":salt
    }

    conn.query('INSERT INTO user SET ?',user,function (err,results,fields) {
      if (err) {
             console.log("error ocurred", err);
             res.send({
                 "code" : 400,
                 "failed": "error ocurred"
             })
         } else {
             console.log('The solution is: ', results);
             res.send({
                 "code": 200,
                 "success": "user registered sucessfully"
             });
         }
    })

  });


  router.get('/login', function(req, res, next) {
    res.render('users/login');
  });

  router.post('/login', async function (req,res) {
    let body = req.body;

    let inputPassword = body.password;
    let salt = Math.round((new Date().valueOf() * Math.random())) + "";
    let hashPassword = crypto.createHash("sha512").update(inputPassword + salt).digest("hex");


    let user = {
      "ID":req.body.userid,
      "Password":hashPassword,
      "Name":req.body.username,
      "Email":req.body.useremail,
      "Phone":req.body.userphone,
      "Github":req.body.usergithub,
      "Blog":req.body.userblog,
      "Salt":salt
    }

    conn.query('INSERT INTO user SET ? ',user,function (err,results,fields) {
      if (error) {
             console.log("error ocurred", error);
             res.send({
                 "code" : 400,
                 "failed": "error ocurred"
             })
         } else {
             console.log('The solution is: ', results);
             res.send({
                 "code": 200,
                 "success": "user registered sucessfully"
             });
         }
    })

  });

  return router
}
