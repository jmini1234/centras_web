const jwtSecret = process.env.JWT_SECRET;
const jwt = require('jsonwebtoken');

function isLogin(req,res,next) {
  const token = req.headers['x-access-token'];
  if(!token) {
    return res.status(403).json({
      success : false,
      message : 'no token'
    });
  }

  jwt.verify(token,jwtSecret,function(err,decoded){
    if(err) return res.json('Invalid');
    else{
      req.decoded = decoded;
      next();
    }
  });
}

module.exports = isLogin;
