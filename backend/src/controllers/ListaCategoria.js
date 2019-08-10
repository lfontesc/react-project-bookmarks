const Categoria = require('../models/Categoria')

exports.findAll = (req, res) => {
  Categoria.find()
  .then(categoria => {
      res.send(categoria);
  }).catch(err => {
      res.status(500).send({
          message: err.message || "Something wrong while retrieving products."
      });
  });
};