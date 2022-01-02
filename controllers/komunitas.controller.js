const { Komunitas } = require('../models')

class KomunitasController {

  static async getKomunitas(req, res) {
    try {
      const komunitasData = await Komunitas.find()
      res.status(200).json(komunitasData)
    } catch (error) {
      res.status(500).json({msg : "internal server error"})
    }
  }

  static async getKomunitasById(req, res) {
    try {
      await Komunitas.findOne({_id : req.params.id})
      .then(komunitas => {
        if(!komunitas) {
          res.sendStatus(404)
        }
        res.status(200).json(komunitas)
      })
    } catch (error) {
      res.status(500).json({msg : "internal server error"})
    }
  }

  static async postKomunitas(req, res) { 
    try {
      const { role } = req.user
      switch(role) {
        case 'user':
          res.sendStatus(403);
          break;
        case 'admin':
          const komunitasData = await req.body;
          const newKomunitas = new Komunitas(komunitasData)
          await newKomunitas.save()
          .then(result => {
            res.status(201).json({
              message : "komunitas added",
              result
            })
          })
          break;
        case 'psikolog':
          res.sendStatus(403);
          break;
        default:
          res.sendStatus(404)
      }    
    } catch (error) {
      res.status(500).json({msg : "internal server error"})
    }
  }

  static async updateKomunitas(req, res) {
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
          await Komunitas.findOneAndUpdate({_id : req.params.id}, req.body, opt)
          .then(komunitas => {
            if(!komunitas) {
              res.sendStatus(404)
            }
            res.status(201).json({
              message : "komunitas updated"
            })
          })
          break;
        case 'psikolog':
          res.sendStatus(403);
          break;
        default:
          res.sendStatus(404)
      }   
    } catch (error) {
      res.status(500).json({msg : "internal server error"})
    }
  }

  static async deleteKomunitas(req, res) {
    try {
      const { role } = req.user
      switch(role) {
        case 'user':
          res.sendStatus(403);
          break;
        case 'admin':
          const komunitas = Komunitas.findOneAndDelete({_id : req.params.id})
          .then(result => {
            if (!komunitas) {
              res.status(404).json({
                message : "komunitas not found",
              })
            }
            res.status(201).json({
              message : "komunitas deleted",
            })
          })
          break;
        case 'psikolog':
          res.sendStatus(403);
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

module.exports = KomunitasController