const { Webinar } = require('../models')

class WebinarController {

  static async getWebinar(req, res) {
    try {
      const webinarData = await Webinar.find()
      res.status(200).json(webinarData)
    } catch (error) {
      res.status(500).json({msg : "internal server error"})
    }
  }

  static async getWebinarById(req, res) {
    try {
      await Webinar.findOne({_id : req.params.id})
      .then(webinar => {
        if(!webinar) {
          res.sendStatus(404)
        }
        res.status(200).json(webinar)
      })
    } catch (error) {
      res.status(500).json({msg : "internal server error"})
    }
  }

  static async postWebinar(req, res) { 
    try {
      const { role } = req.user
      switch(role) {
        case 'user':
          res.sendStatus(403);
          break;
        case 'admin':
          const webinarData = await req.body;
          const newWebinar = new Webinar(webinarData)
          await newWebinar.save()
          .then(result => {
            res.status(201).json({
              message : "webinar added",
              result
            })
          })
          break;
        default:
          res.sendStatus(404)
      }    
    } catch (error) {
      res.status(500).json({msg : "internal server error"})
    }
  }

  static async updateWebinar(req, res) {
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
          await Webinar.findOneAndUpdate({_id : req.params.id}, req.body, opt)
          .then(webinar => {
            if(!webinar) {
              res.sendStatus(404)
            }
            res.status(201).json({
              message : "webinar updated"
            })
          })
          break;
        default:
          res.sendStatus(404)
      }   
    } catch (error) {
      res.status(500).json({msg : "internal server error"})
    }
  }

  static async deleteWebinar(req, res) {
    try {
      const { role } = req.user
      switch(role) {
        case 'user':
          res.sendStatus(403);
          break;
        case 'admin':
          const webinar = Webinar.findOneAndDelete({_id : req.params.id})
          .then(result => {
            if (!webinar) {
              res.status(404).json({
                message : "webinar not found",
              })
            }
            res.status(201).json({
              message : "webinar deleted",
            })
          })
          break;
        default:
          res.sendStatus(404)
      }    
    } catch (error) {
      console.log(error);
      res.status(500).json({msg : "internal server error"})
    }
  }
}

module.exports = WebinarController