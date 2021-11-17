const Bookmodel= require("../models/userModel.js")

const createBook= async function (req, res) {
    var data= req.body
    let savedData= await Bookmodel.create(data)
    res.send({msg: savedData})    
}


const bookList= async function (req, res) {
    let allUsers= await Bookmodel.find().select({bookName: 1 , authorName: 1})
    res.send({msg: allUsers})
}
const getBooksInYear = async function (req, res) {
    var data= req.body
    let savedData= await Bookmodel.find({year:data.year})
    res.send({msg: savedData})    
}
const getParticularBooks = async function (req, res) {
    let savedData= await Bookmodel.find(req.body)
    res.send({msg: savedData})    
}
const getXINRBooks = async function (req, res) {
    let savedData= await Bookmodel.find({ 'price.indian' : {$in: ["100INR", "200INR", "500INR"] } } )
    res.send({msg: savedData})    
}
const getRandomBooks = async function (req, res) {
    let savedData= await Bookmodel.find({ $or: [ {Stockavailable: true} , { totalpages: {$gt: 500} }   ] } )

    res.send({msg: savedData})    
}

module.exports.createBook= createBook
module.exports.bookList= bookList
module.exports.getBooksInYear= getBooksInYear
module.exports.getParticularBooks= getParticularBooks
module.exports.getXINRBooks= getXINRBooks
module.exports.getRandomBooks=getRandomBooks 