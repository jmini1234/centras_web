const jwtSecret = process.env.JWT_SECRET;
const jwt = require('sendwebtoken');

function isLogin(req,res,next) {
  const token = req.headers['x-access-token'];
  if(!token) {
    return res.status(403).send({
      'message' : '토큰 값을 입력해주세요'
    });
  }

  jwt.verify(token,jwtSecret,function(err,decoded){
    if(err) return res.status(400).send({ "message":'다시 로그인 해주세요'});
    else{
      req.decoded = decoded;
      next();
    }
  });
}

module.exports = isLogin;
