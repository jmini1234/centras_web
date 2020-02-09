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

    let id = req.body.id;
    let inputPassword = req.body.pw;

    conn.query('SELECT * FROM user WHERE id = ?',[id],function (err,results) {
      if(!results[0])
        res.send('check your id');
      else {
        let user = results[0];
        let dbPassword = user.pw;
        let hashPassword = crypto.createHash("sha512").update(inputPassword + user.salt).digest("hex");

        if(dbPassword == hashPassword){
          var date = moment().format('YYYY-MM-DD HH:mm:ss');
          conn.query('UPDATE user SET login_date=? WHERE id = ?',[date,user.id]);
          //token 발행
          let payload = {
            idx : user.idx,
            id : id,
            salt : user.salt
          };
          let option = {expiresIn : '1h'};
          token = jwt.sign(payload,jwtSecret,option);
          res.json({'user':user,'token':token});
        }
        else{
          res.send('login fail')
        }
      }
    });
  });

  router.put('/update',isLogin,function (req,res) {
    let user_idx = req.decoded.idx;
    let id = req.body.id;
    let inputPassword = req.body.pw;
    let nickname = req.body.nickname;
    let email = req.body.email;
    let hashPassword = crypto.createHash("sha512").update(inputPassword + req.decoded.salt).digest("hex");

    conn.query('SELECT * FROM user WHERE id = ?',[id],function (err,results) {
      if(results[0])
        res.send('duplicate id');
      else{
        conn.query('UPDATE user SET id=?, pw=?, nickname=?, email=? WHERE idx = ?',[id,hashPassword,nickname,email,user_idx],function (err,results) {
          if (err) {
                 console.log("error ocurred", err);
                 res.send({
                     "code" : 400,
                     "failed": "error ocurred"
                 })
             } else {
                 res.send({
                     "code": 200,
                     "success": "user modified sucessfully"
                 });
             }
        });
      }
  });
});
  return router;
}
