const { Schema, model } = require ('mongoose');

const UserSchema = new Schema({
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      require: true,
    }
}, {
  timestamps: true,
});

module.exports = model('User',UserSchema)