const mongoose=require('mongoose')
const objectId=mongoose.Schema.Types.ObjectId
const bookModel=new mongoose.Schema({
    name:String,
	author:{
        type:objectId,
        ref:'newauthor'
    },
	price:Number,
	ratings:Number,
    publisher:{
        type:objectId,
        ref:'publish'
    }
}, {timestamps: true} )

module.exports=mongoose.model('book1',bookModel)


