const mongoose=require('mongoose')
//bookName( mandatory field), price containing Indian and european price, 
//year ( should be 2021 if no year is provided) , 
//tags array, authorName, totalPages , stockAvailable ( true false) 
const userSchema=new mongoose.Schema({
    bookName :{
        type:String,
        required: true
    },
    price :{
        indian: String,
        european: String
    },
    year :{
        type : Number,
        default:2021 
    },
    tags :[String],
    authorName : String,
    totalpages : Number,
    Stockavailable:{
        type:Boolean,
        default:false
    }
}, {timestamps: true} )

module.exports=mongoose.model('Book',userSchema)

// String, Number
// Boolean, Object/json, array