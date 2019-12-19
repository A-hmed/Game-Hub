const mongoose = require('mongoose')
const cors = require('cors')
const Schema = mongoose.Schema
const ProductSchema = new mongoose.Schema({
     
      name:{
        type: String,
        required: true
      },
      id:{
          type: String,
          
      },
      price:{
          type: String
      },
      photo:{
          type: String,
          required: true
      },
      date: {
        type: Date,
        default: Date.now
      },
      description:{
        type:String
      }
})
 
module.exports = Product = mongoose.model('product', ProductSchema);

