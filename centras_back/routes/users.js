module.exports = (app) => {
  var express = require('express');
  var router = express.Router();

  // 암호화 library
  var crypto = require('crypto');

  var moment = require('moment');
  require('moment-timezone');  
  moment.tz.setDefault("Asia/Seoul");

  require("dotenv").config();

  // User 로그인 JWT Token 사용 
  const jwtSecret = process.env.JWT_SECRET;
  const jwt = require('jsonwebtoken');
  var isLogin = require('./token.js');

  const conn = app.get('pool')


  /*
    유저 회원 가입   
  */

  router.post('/sign_up', function (req,res) {

    //비밀번호 단방향 암호화 저장

    let inputPassword = req.body.pw;
    let salt = Math.round((new Date().valueOf() * Math.random())) + "";
    let hashPassword = crypto.createHash("sha512").update(inputPassword + salt).digest("hex");

    conn.query('SELECT * FROM user WHERE id = ?',[req.body.id],function (err,results) {

      // 아이디 중복 확인 

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

  /*
    유저 로그인   
  */

  router.post('/login', function (req,res) {

    let id = req.body.id;
    let inputPassword = req.body.pw;

    conn.query('SELECT * FROM user WHERE id = ?',[id],function (err,results) {
        let user = results[0];
        // 아이디 오류
        if (user == undefined){
          res.status(400).send({"message":'로그인 실패', 'code': 1});
        }
        else{
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
            let option = {expiresIn : '24h'};
            token = jwt.sign(payload,jwtSecret,option);
  
            // token 값 출력
            res.status(200).send({'message':'로그인 성공','token':token, 'code': 0});
          }
          // 비밀번호 오류
          else{
            res.status(400).send({"message":'로그인 실패', 'code': 1});
          }
        }
      });
  });

  /*
    유저 개인정보 수정   
  */

  // isLogin 으로 token값 불러와서 user 정보 가져오기

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
