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
  
  router.post('/sign_up', function (req,res) {

    //pw 단방향 암호화 저장

    let inputPassword = req.body.pw;
    let salt = Math.round((new Date().valueOf() * Math.random())) + "";
    let hashPassword = crypto.createHash("sha512").update(inputPassword + salt).digest("hex");

    conn.query('SELECT * FROM user WHERE id = ?',[req.body.id],function (err,results) {
      if(results[0])
        res.status(400).send({
          "message" : '중복된 아이디 입니다.'
        });
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
                 res.status(400).send({
                     "message": "error ocurred"
                 })
             } else {
                 res.status(200).send({
                     "message": "회원가입이 성공적으로 완료되었습니다."
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
        res.status(400).send({
          "message" : '중복된 아이디입니다.'
        });
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
          res.status(200).send({'message':'로그인 성공','user':user,'token':token});
        }
        else{
          res.status(400).send({"message":'로그인 실패'});
        }
      }
    });
  });

  router.put('/',isLogin,function (req,res) {
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
                 res.send.status(400)({
                     "message": "error ocurred"
                 });
             } else {
                 res.status(200).send({
                    "message": "회원정보 수정이 완료되었습니다."
                 });
             }
        });
      }
  });
});
  return router;
}
