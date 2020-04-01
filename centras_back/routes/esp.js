module.exports = (app) => {
    var express = require('express');
    var router = express.Router();
    const conn = app.get('pool');

    var isLogin = require('./token.js');

    var moment = require('moment');
    require('moment-timezone');  
    moment.tz.setDefault("Asia/Seoul");

    router.post('/',isLogin, function (req,res) {
        // ip 주소와 size 받음 
        let ip = req.body.ip;
        let size = req.body.size;

        conn.query('SELECT * FROM streaming WHERE ip = ?',[ip],function (err,results) {
            if(results[0]){
                let nursery_idx = results[0].nursery_idx;
                var date = moment().format('YYYY-MM-DD HH:mm:ss');

                // 사이즈는 s,m,l 3종류 
                if (size=='s')
                    conn.query('UPDATE size SET s_num=s_num+1,update_time =? WHERE isActive=1 and nursery_idx = ?',[date,nursery_idx],function(err,results){
                        if(err){
                            res.status(400).send({
                                "message": "error ocurred"
                            });    
                        }
                        else{
                            res.status(200).send({
                                "message":"크기 업데이트 성공"
                            });
                        }
                    })
                else if (size=='m')
                    conn.query('UPDATE size SET m_num=m_num+1,update_time =? WHERE nursery_idx = ?',[date,nursery_idx],function(err,results){
                        if(err){
                            res.status(400).send({
                                "message": "error ocurred"
                            });    
                        }
                        else{
                            res.status(200).send({
                                "message":"크기 업데이트 성공"
                            });
                        }
                    })
                else if (size=='l')
                    conn.query('UPDATE size SET l_num=l_num+1,update_time =? WHERE nursery_idx = ?',[date,nursery_idx],function(err,results){
                        if(err){
                            res.status(400).send({
                                "message": "error ocurred"
                            });    
                        }
                        else{
                            res.status(200).send({
                                "message":"크기 업데이트 성공"
                            });
                        }
                    })
            }
            else {
                res.status(400).send({
                    "message": "유효한 카메라가 아닙니다."
                }); 
            }
        })
    });

    /*
    크기 측정 새로 시작하기 버튼 
     */

    router.post('/:idx/size',isLogin, function (req,res) {
        // idx 양식장 크기 측정 시작하기 
        let reset = {
            'nursery_idx' : req.params.idx,
            's_num' : 0,
            'm_num' : 0,
            'l_num' : 0,
            'update_time' : moment().format('YYYY-MM-DD HH:mm:ss')
        }
        conn.query('INSERT INTO size SET ? ',reset,function (err,results,next) {
            if (err) {
                res.status(400).send({
                    "error": "error ocurred"
                })
            } else {
                res.status(200).send({
                    "message": "크기 측정 시작"
                });
            }
        })
    });


    return router;
}