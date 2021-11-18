const authorModel= require("../models/authorModel.js")
const bookModel= require("../models/bookmodel.js")
const publisherModel= require("../models/publisher.js")
const mongoose= require("mongoose")
const createauthor= async function (req, res) {
    var data= req.body
    let savedData= await authorModel.create(data)
    res.send({msg: savedData})    
}
const publish= async function (req, res) {
    var data= req.body
    let savedData= await publisherModel.create(data)
    res.send({msg: savedData})    
}

const createbook= async function (req, res) {
    let data=req.body
    let id=data.author
    let id2=data.publisher
    let id1=await authorModel.findById(id)
    let id3=await publisherModel.findById(id2)
    if(id1 && id3)
    {
        let book=await bookModel.create(data)
        res.send({book})
    }
    else
    res.send("error not found such id")
}
const getbook= async function (req, res) {
    let savedData= await bookModel.find().populate({path:'author',select:'_id author_name age'}).populate({path:'publisher', select:'_id name headQuarter'})
    res.send({msg: savedData})    
}
module.exports.createauthor= createauthor
module.exports.createbook= createbook
module.exports.getbook= getbook
module.exports.publish= publish