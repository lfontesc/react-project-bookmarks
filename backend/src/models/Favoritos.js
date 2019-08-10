const { Schema, model } = require ('mongoose');

const FavoritoSchema = new Schema({
    title: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      require: true,
    },
    idCategoria: {
      type: String,
      require: true,
    }
}, {
  timestamps: true,
});

module.exports = model('Favorito',FavoritoSchema)