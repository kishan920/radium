const mongoose=require('mongoose')
///Create a bookSchema with bookName, authorName, category and year
const bookSchema=new mongoose.Schema({
    
bookname: {
    type:String,
    required: true
      },
    authorName: String,
    category :String,
    year : Number

}, {timestamps: true} )

module.exports=mongoose.model('Book',bookSchema)

// String, Number
// Boolean, Object/json, array