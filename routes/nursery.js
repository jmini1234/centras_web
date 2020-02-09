module.exports = (app) => {
    var express = require('express');
    var router = express.Router();
    var mysql = require('mysql');
    var dbOptions = require('./index.js');
    var isLogin = require('./token.js');
    const conn = app.get('pool');

    router.post('/register',isLogin,function(req,res,next){
        let nursery = {
            'user_idx' : req.decoded.idx,
            'nursery_id' : req.body.nursery_id
        }
        conn.query('INSERT INTO nursery SET ?',nursery,function(err,results){
            if(err){
                console.log("error ocurred", err);
                res.send({
                    "code" : '400',
                    "failed": "error ocurred"
                });    
            }
            else{
                res.send({
                    "msg":"양식장 등록 성공"
                });
            }

        });
    });

    //양식장 이름 수정 
    router.put('/update/:idx',isLogin,function(req,res,next){
        var idx = req.params.idx;
        let user_idx = req.decoded.idx;
        var new_nursery_id = req.body.nursery_id;

        conn.query('UPDATE nursery SET nursery_id=? WHERE idx= ?',[new_nursery_id,idx],function(err,results,next){
            if(err){
                res.send({
                    "code" : 400,
                    "failed": "error ocurred"
                });
            }
            else{
                res.send({
                    "code" : 200,
                    "msg" : "양식장 업데이트 성공"
                })
            }
        })
    });

    router.delete('/delete/:idx',isLogin,function(req,res,next){
        var idx = req.params.idx;
        let user_idx = req.decoded.idx;

        conn.query('SELECT * FROM nursery WHERE idx=?',[idx],function(err,results){
            if(!results[0]){
                res.send({
                    "code" : 400,
                    "failed": "양식장 없음"
                });
            }
            else if(results[0].user_idx==user_idx){
                conn.query('DELETE FROM nursery WHERE idx= ?',[idx],function(err,results,next){
                    if(err){
                        res.send({
                            "code" : 400,
                            "msg" : "delete error"
                        });
                    }
                    res.send({
                        "code" : 200,
                        "msg" : "양식장 삭제 성공"
                    });
                });
            }
            else{
                res.send({
                    "code" : 400,
                    "msg": "삭제 권한 없음"
                 });
            }
        });
    });


    //user의 양식장 list 확인 

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

    router.get('/:idx/temperature',isLogin,function(req,res,next){
        var idx = req.params.idx;
        let user_idx = req.decoded.idx;
        conn.query('SELECT * FROM temperature WHERE nursery_idx =?',[idx],function(err,results,next){
            if(err) {
                res.send({
                    "code" : 400,
                    "error" : err
                });
            }
            else{
                res.send({
                    "code" : 200,
                    "temperature" : results
                });
            }
        });
    });

    router.get('/:idx/size',isLogin,function(req,res,next){
        var idx = req.params.idx;
        conn.query('SELECT * FROM size WHERE nursery_idx =?',[idx],function(err,results,next){
            if(err) {
                res.send({
                    "code" : 400,
                    "error" : err
                });
            }
            else{
                res.send({
                    "code" : 200,
                    "temperature" : results
                });
            }
        });
  
    });

    router.get('/:idx/streaming',isLogin,function(req,res,next){
        var idx = req.params.idx;
        conn.query('SELECT * FROM streaming WHERE nursery_idx =?',[idx],function(err,results,next){
            if(err) {
                res.send({
                    "code" : 400,
                    "error" : err
                });
            }
            else{
                res.send({
                    "code" : 200,
                    "temperature" : results
                });
            }
        });
  
    });

    return router;
}  