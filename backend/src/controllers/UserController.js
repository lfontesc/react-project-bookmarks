const User = require('../models/User')

module.exports = {
  async index(req,res) {
    const cat = await User.find()
    return res.json(cat)
  }
}