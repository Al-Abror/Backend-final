const { Tim } = require('../models')

class TimController {

  static async getTim(req, res) {
    try {
      const timData = await Tim.find()
      res.status(200).json(timData)
    } catch (error) {
      res.status(500).json({msg : "internal server error"})
    }
  }

  static async getTimById(req, res) {
    try {
      await Tim.findOne({_id : req.params.id})
      .then(tim => {
        if(!tim) {
          res.sendStatus(404)
        }
        res.status(200).json(tim)
      })
    } catch (error) {
      res.status(500).json({msg : "internal server error"})
    }
  }

  static async postTim(req, res) { 
    try {
      const { role } = req.user
      switch(role) {
        case 'user':
          res.sendStatus(403);
          break;
        case 'admin':
          const timData = await req.body;
          const newTim = new Tim(timData)
          await newTim.save()
          .then(result => {
            res.status(201).json({
              message : "tim added",
              result
            })
          })
          break;
        case 'psikolog':
          res.sendStatus(403);
        default:
          res.sendStatus(404)
      }    
    } catch (error) {
      res.status(500).json({msg : error.message})
    }
  }

  static async updateTim(req, res) {
    try {
      const { role } = req.user
      switch(role) {
        case 'user':
          res.sendStatus(403);
          break;
        case 'admin':
          const opt = {
            new : true
          }
          await Tim.findOneAndUpdate({_id : req.params.id}, req.body, opt)
          .then(tim => {
            if(!tim) {
              res.sendStatus(404)
            }
            res.status(201).json({
              message : "tim updated"
            })
          })
          break;
        case 'psikolog':
          res.sendStatus(403);
        default:
          res.sendStatus(404)
      }   
    } catch (error) {
      res.status(500).json({msg : error.message})
    }
  }

  static async deleteTim(req, res) {
    try {
      const { role } = req.user
      switch(role) {
        case 'user':
          res.sendStatus(403);
          break;
        case 'admin':
          const tim = Tim.findOneAndDelete({_id : req.params.id})
          .then(result => {
            if (!tim) {
              res.status(404).json({
                message : "tim not found",
              })
            }
            res.status(201).json({
              message : "tim deleted",
            })
          })
          break;
        case 'psikolog':
          res.sendStatus(403);
        default:
          res.sendStatus(404)
      }    
    } catch (error) {
      console.log(error);
      res.status(500).json({msg : "internal server error"})
    }
  }
}

module.exports = TimController