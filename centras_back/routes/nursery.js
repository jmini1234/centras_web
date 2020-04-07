module.exports = (app) => {
    var express = require('express');
    var router = express.Router();
    var isLogin = require('./token.js');
    const conn = app.get('pool');

    // isLogin 으로 모두 token 필요 


  /*
    양식장 등록  
  */

    router.post('/',isLogin,function(req,res,next){
        let nursery = {
            'user_idx' : req.decoded.idx,
            'nursery_id' : req.body.nursery_id
        }
        conn.query('INSERT INTO nursery SET ?',nursery,function(err,results){
            if(err){
                console.log("error ocurred", err);
                res.status(400).send({
                    "message": "error ocurred"
                });    
            }
            else{
                res.status(200).send({
                    "message":"양식장 등록 성공"
                });
            }

        });
    });


  /*
    양식장 이름 수정  
  */

    router.put('/:idx',isLogin,function(req,res,next){
        
        var idx = req.params.idx;
        let user_idx = req.decoded.idx;
        var new_nursery_id = req.body.nursery_id;

        conn.query('SELECT * FROM nursery WHERE idx=?',[idx],function(err,results){
            if(!results[0]){
                res.status(400).send({
                    "message": "해당 양식장 없음"
                });
            }
            else if(results[0].user_idx==user_idx){
                conn.query('UPDATE nursery SET nursery_id=? WHERE idx= ?',[new_nursery_id,idx],function(err,results,next){
                    if(err){
                        res.status(400).send({
                            "message": "error ocurred"
                        });
                    }
                    else{
                        res.status(200).send({
                            "message" : "양식장 업데이트 성공"
                        })
                    }
                });
            }
            else{
                res.status(403).send({
                    "message": "삭제 권한 없음"
                 });
            }
        });

    });

  /*
    양식장 삭제  
  */

    router.delete('/:idx',isLogin,function(req,res,next){
        var idx = req.params.idx;
        let user_idx = req.decoded.idx;

        conn.query('SELECT * FROM nursery WHERE idx=?',[idx],function(err,results){
            if(!results[0]){
                res.status(400).send({
                    "message": "해당 양식장 없음"
                });
            }
            else if(results[0].user_idx==user_idx){
                conn.query('DELETE FROM nursery WHERE idx= ?',[idx],function(err,results,next){
                    if(err){
                        res.status(400).send({
                            "message" : "delete error"
                        });
                    }
                    res.status(200).send({
                        "message" : "양식장 삭제 성공"
                    });
                });
            }
            else{
                res.status(403).send({
                    "message": "삭제 권한 없음"
                 });
            }
        });
    });


  /*
    양식장 list 조회
  */

    router.get('/list', isLogin, function(req, res, next) {
        let user_idx = req.decoded.idx;
        conn.query('SELECT * FROM nursery WHERE user_idx=?',[user_idx],function(err,results){
            if(err){
                res.status(400).send({
                    "message": "error ocurred"
                });
            }
            else{
                res.status(200).send({
                    "data" : results
                });            
            }

        });
    });

  /*
    양식장 수온 조회
  */
    
    router.get('/:idx/temperature',isLogin,function(req,res,next){
        var idx = req.params.idx;
        let user_idx = req.decoded.idx;
        conn.query('SELECT * FROM temperature WHERE nursery_idx =?',[idx],function(err,results,next){
            if(err) {
                res.status(400).send({
                    "error" : err
                });
            }
            else{
                res.status(200).send({
                    "temperature" : results
                });
            }
        });
    });


  /*
    양식장 물고기 사이즈 조회
  */

    router.get('/:idx/size',isLogin,function(req,res,next){
        var idx = req.params.idx;
        conn.query('SELECT * FROM size WHERE nursery_idx =?',[idx],function(err,results,next){
            if(err) {
                res.status(400).send({
                    "error" : err
                });
            }
            else{
                res.status(200).send({
                    "size" : results
                });
            }
        });
  
    });

  /*
    양식장 스트리밍 ip 주소 조회
  */

    router.get('/:idx/streaming',isLogin,function(req,res,next){
        var idx = req.params.idx;
        conn.query('SELECT * FROM streaming WHERE nursery_idx =?',[idx],function(err,results,next){
            if(err) {
                res.status(400).send({
                    "error" : err
                });
            }
            else{
                res.status(200).send({
                    "streaming" : results
                });
            }
        });
    });

    /*
    양식장 카메라 ip 주소 등록
    */
    router.post('/:idx/streaming',isLogin,function(req,res,next){

        var nursery_idx = req.params.idx;
        var qry = 'SELECT * FROM streaming WHERE nursery_idx = ? '
        conn.query(qry,nursery_idx,function(err,results,next){
            if(results.length<2){
                let ip_info = {
                    'nursery_idx' : req.params.idx,
                    'ip' : req.body.ip
               }
               conn.query('INSERT INTO streaming SET ?',ip_info,function(err,results,next){
                   if(err) {
                       res.status(400).send({
                           "error" : err
                       });
                   }
                   else{
                       res.status(200).send({
                           "streaming" : "suceess streaming ip add"
                       });
                   }
               });
            }
            else if(err){
                res.status(400).send({
                    "error" : err
                });
            }
            else{
                res.status(400).send({
                    "error" : "only two camera is valid"
                }); 
            }
        });
    });
    return router;  
}