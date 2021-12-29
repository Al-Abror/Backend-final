const { Message } = require('../models')

class KontakController {
  static async getMessage(req, res) {
    try {
      const { role } = req.user
      switch (role) {
        case 'user':
          const msgData = await Message.find()
          res.status(200).json(msgData)
          break;
        case 'admin' :
          res.sendStatus(403)
          break;
        default:
          res.sendStatus(404)
      }
    } catch (error) {
      res.status(500).send(error)
    }
  }

  static async getMessageById(req, res) {
    try {
      const { role } = req.user
      switch (role) {
        case 'user':
          const msgData = await Message.findOne({_id : req.params.id})
          res.status(200).json(msgData)
          break;
        case 'admin':
          res.sendStatus(403)
          break;
        default :
          res.sendStatus(404)
      }
    } catch (error) {
      res.status(500).send(error)
    }
  }

  static async postMessage(req, res) {
    try {
      const { role } = req.user
      switch (role) {
        case 'user' :
          const msgData = await req.body
          const newMsg = new Message(msgData)
          await newMsg.save()
          .then(result => {
            res.status(201).json({
              message : "message submitted",
              result
            })
          })
          break;
        case 'admin':
          res.sendStatus(403)
          break;
        default:
          res.sendStatus(404)
      }
    } catch (error) {
      res.status(500).json({msg : "internal server error"})
    }
  }
}

module.exports = KontakController