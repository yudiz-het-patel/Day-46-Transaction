const mongoose = require('mongoose')

const bankSchema = new mongoose.Schema(
  {
    sBankName: { type: String, require: true },
    sCountry: { type: String, require: true },
  },
  { timestamps: true }
)
module.exports = mongoose.model('banks', bankSchema)
