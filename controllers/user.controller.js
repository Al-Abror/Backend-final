const { User } = require('../models')
const bcrypt = require('bcrypt')
const salt = bcrypt.genSaltSync(10);

class UserController {
  static async registerUser(req, res) {
    try {
      const {name, email, password, gender, no_hp, role} = await req.body;
      const hashpw = bcrypt.hashSync(password, salt)
      const newUser = new User({
        name: name,
        email: email,
        password : hashpw,
        gender: gender,
        no_hp: no_hp,
        role : role
      })
      await newUser.save()
      .then(result => {
        res.status(201).json({
          message : "Register success",
          result
        })
    })    
    } catch (error) {
      console.log(error);
      res.status(500).json({msg : "internal server error"})
    }
  }

  static async updateUser(req, res) {
    try {
      const { role } = req.user
      switch(role) {
        case 'user':
          const opt = {
            new : true
          }
          const {name, email, password, gender, no_hp, role} = await req.body;
          const hashpw = bcrypt.hashSync(password, salt)
          const newUser = {
            name: name,
            email: email,
            password : hashpw,
            gender: gender,
            no_hp: no_hp,
            role : role
          }
          await User.findOneAndUpdate({_id : req.params.id}, newUser, opt)
          res.status(201).json({
            message : "user updated"
          })
          break;
        case 'admin':
          res.sendStatus(403);
          break;
        default:
          res.sendStatus(404);
      }
    } catch (error) {
      res.status(500).json({msg : "internal server error"})
    }
  }
}

module.exports = UserController