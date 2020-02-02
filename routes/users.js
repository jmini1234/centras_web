module.exports = (app) => {
  var express = require('express');
  var router = express.Router();
  var mysql = require('mysql');
  var dbOptions = require('./index.js');
  var crypto = require('crypto');
  var moment = require('moment');
  require('moment-timezone');
  moment.tz.setDefault("Asia/Seoul");
  require("dotenv").config();
  const jwtSecret = process.env.JWT_SECRET;
  const jwt = require('jsonwebtoken');
  var isLogin = require('./token.js');

  /* GET users listing. */

  // url: user/login
  // user와 관련된 내용만 한 파일에 존재

  const conn = app.get('pool')

  router.get('/sign_up', function(req, res, next) {
     res.render('users/sign_up');
  });

  router.post('/sign_up', function (req,res) {

    //pw 단방향 암호화 저장

    let inputPassword = req.body.pw;
    let salt = Math.round((new Date().valueOf() * Math.random())) + "";
    let hashPassword = crypto.createHash("sha512").update(inputPassword + salt).digest("hex");

    conn.query('SELECT * FROM user WHERE id = ?',[req.body.id],function (err,results) {
      if(results[0])
        res.send('duplicate id');
      else {
        var date = moment().format('YYYY-MM-DD HH:mm:ss');

        let user = {
          "id":req.body.id,
          "pw":hashPassword,
          "nickname":req.body.nickname,
          "email":req.body.email,
          "salt" : salt,
          "regist_date" : date
        };

        conn.query('INSERT INTO user SET ?',user,function (err,results,fields) {
          if (err) {
                 console.log("error ocurred", err);
                 res.send({
                     "code" : 400,
                     "failed": "error ocurred"
                 })
             } else {
                 // console.log('The solution is: ', results);
                 res.send({
                     "code": 200,
                     "success": "user registered sucessfully"
                 });
             }
        });
      }
    });
  });


  router.get('/login', function(req, res, next) {
    res.render('users/login');
  });

  router.post('/login', function (req,res) {
    let body = req.body;

    let id = body.id;
    let pw = body.pw;

    conn.query('SELECT * FROM user WHERE id = ?',[id],function (err,results) {
      if(!results[0])
        res.send('check your id');
      else {
        let user = results[0];
        let dbPassword = user.pw;
        let salt = user.salt;
        let hashPassword = crypto.createHash("sha512").update(pw + salt).digest("hex");

        if(dbPassword == hashPassword){
          let payload = {
            id : id
          };
          let option = {expiresIn : '1h'};
          token = jwt.sign(payload,jwtSecret,option);
          res.json({'user':user.id,'token':token});
        }
        else{
          res.send('login fail')
        }
      }
    });
  });

  router.post('/show',isLogin,function (req,res) {
    let user = req.decoded.id;
    res.send(user);
  })

  return router
}
