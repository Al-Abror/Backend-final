const { User } = require('../models')
const bcrypt = require('bcrypt')
const salt = bcrypt.genSaltSync(10);

class UserController {
  static async registerUser(req, res) {
    try {
      const {name, email, password, gender, no_hp, role, member, jadwalKonsultasi} = await req.body;
      const hashpw = bcrypt.hashSync(password, salt)
      const newUser = new User({
        name: name,
        email: email,
        password : hashpw,
        gender: gender,
        no_hp: no_hp,
        role : role,
        member : member,
        jadwalKonsultasi : jadwalKonsultasi
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
      res.status(500).json({msg : error.message})
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
          const {name, email, gender, no_hp, role, member} = await req.body;
          const newUser = {
            name: name,
            email: email,
            gender: gender,
            no_hp: no_hp,
            role : role,
            member : member
          }
          await User.findOneAndUpdate({_id : req.params.id}, newUser, opt)
          .then(user => {
            if (!user) {
              res.sendStatus(404)
            }
            res.status(201).json({
              message : "user updated"
            })
          })
          break;
        case 'admin':
          res.sendStatus(403);
          break;
        case 'psikolog':
          res.sendStatus(403);
          break;
        default:
          res.sendStatus(404);
      }
    } catch (error) {
      res.status(500).json({msg : error.message})
    }
  }

  static async updatePassword (req, res) {
    try {
      const {role} = req.user
      switch(role) {
        case 'user':
          const opt = {
            new : true
          }
          const { password } = await req.body;
          const hashpw = bcrypt.hashSync(password, salt)
          const newUser = {
            password : hashpw,
          }
          await User.findOneAndUpdate({_id : req.params.id}, newUser, opt)
          .then(user => {
            if (!user) {
              res.sendStatus(404)
            }
            res.status(201).json({
              message : "user updated"
          })
        })
          break;
        case 'admin':
          res.sendStatus(403);
          break;
        default:
          res.sendStatus(404)
      }      
    } catch (error) {
      res.status(500).json({msg : error.message})
    }
  }
}

module.exports = UserController