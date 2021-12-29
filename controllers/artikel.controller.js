const { Artikel } = require('../models')

class ArtikelController {

  static async getArtikel(req, res) {
    try {
      const artikelData = await Artikel.find()
      res.status(200).json(artikelData)
    } catch (error) {
      res.status(500).json({msg : "internal server error"})
    }
  }

  static async getArtikelById(req, res) {
    try {
      await Artikel.findOne({_id : req.params.id})
      .then(artikel => {
        if(!artikel) {
          res.sendStatus(404)
        }
        res.status(200).json(artikel)
      })
    } catch (error) {
      console.log(error);
      res.status(500).json({msg : "internal server error"})
    }
  }

  static async postArtikel(req, res) { 
    try {
      const { role } = req.user
      switch(role) {
        case 'user':
          res.sendStatus(403);
          break;
        case 'admin':
          const artikelData = await req.body;
          const newArtikel = new Artikel(artikelData)
          await newArtikel.save()
          .then(result => {
            res.status(201).json({
              message : "artikel added",
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

  static async updateArtikel(req, res) {
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
          await Artikel.findOneAndUpdate({_id : req.params.id}, req.body, opt)
          .then(artikel => {
            if(!artikel) {
              res.sendStatus(404)
            }
            res.status(201).json({
              message : "artikel updated"
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

  static async deleteArtikel(req, res) {
    try {
      const { role } = req.user
      switch(role) {
        case 'user':
          res.sendStatus(403);
          break;
        case 'admin':
          const artikel = Artikel.findOneAndDelete({_id: req.params.id})
          .then(result => {
            if (!artikel) {
              res.status(404).json({
                message : "artikel not found",
              })
            }
            res.status(201).json({
              message : "artikel deleted",
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

module.exports = ArtikelController