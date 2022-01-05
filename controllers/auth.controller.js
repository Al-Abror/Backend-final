const accessTokenSecret = 'youraccesstokensecret';
const { User } = require('../models')
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

class AuthController {
  static async authenticationJWT(req, res, next) {
    const authHeader = req.headers.authorization;
    if (authHeader) {
      const token = authHeader.split(' ')[1];
      jwt.verify(token, accessTokenSecret, (err, user) => {
        if (err) {
            return res.sendStatus(403);
        }
        req.user = user;
        next();
      });
    } else {
      res.sendStatus(401);
    }
  }
  
  static async loginUser(req, res) {
    try {
      // search user
      User.findOne({ email: req.body.email }).then(
        (user) => {      
          if (!user) {
            return res.status(401).json({
              error: 'User not found!'
            });
          }
          bcrypt.compare(req.body.password, user.password).then(
            (valid) => {
              if(!valid) {
                return res.status(401).json({
                  error: 'Incorrect password!'
                });
              }
              const token = jwt.sign({email: user.email, role: user.role}, accessTokenSecret)
              const role = user.role
              res.status(200).json({
                token: token,
                role: role
              });
            }
          )   
        })            
    } catch (error) {
      res.status(500).json({msg : "internal server error"})
    }
  }
}

module.exports = AuthController