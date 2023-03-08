const mongoose = require('mongoose');
const categoryscheme = new mongoose.Schema({
    name:{
        type:String,
    required:'necessary'   },
    image:{
        type:String,
        required:'this field is required'
    }
})

module.exports = mongoose.model('category' , categoryscheme)