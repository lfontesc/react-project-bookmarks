const { Schema, model } = require ('mongoose');

const CategoriaSchema = new Schema({
    name: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      require: true,
    }
}, {
  timestamps: true,
});

module.exports = model('Categoria',CategoriaSchema)