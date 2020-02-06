module.exports = (app) => {
    var express = require('express');
    var router = express.Router();
    var mysql = require('mysql');
    var dbOptions = require('./index.js');
    var isLogin = require('./token.js');

    const conn = app.get('pool')

    router.post('/register',isLogin,function(req,res,next){
        let nursery = {
            'user_idx' : req.decoded.idx,
            'nursery_id' : req.body.nursery_id
        }
        conn.query('INSERT INTO nursery SET ?',nursery,function(err,results){
            if(err){
                console.log("error ocurred", err);
                res.send({
                    "code" : 400,
                    "failed": "error ocurred"
                });    
            }
            else{
                res.send({
                    "msg":"양식장 등록 성공"
                });
            }

        });
    })

    router.get('/list', isLogin, function(req, res, next) {
        let user_idx = req.decoded.idx;
        conn.query('SELECT * FROM nursery WHERE user_idx=?',[user_idx],function(err,results){
            if(err){
                console.log("error ocurred", err);
                res.send({
                    "code" : 400,
                    "failed": "error ocurred"
                });
            }
            else{
                res.send({
                    "code" : 200,
                    "data" : results
                });            
            }

        });
    });

    //양식장 정보 수정, 디테일 정보 보기 

    return router;
}  