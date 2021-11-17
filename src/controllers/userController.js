const UserModel= require("../models/userModel.js")
const UserModel1= require("../models/userModel1.js")

const createBook = async function (req, res) {
    var data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})    
}

const createAuthor = async function (req, res) {
    var data= req.body
    let savedData= await UserModel1.create(data)
    res.send({msg: savedData})    
}
const listOut = async function (req, res) {
    let Data= await UserModel1.findOne({author_name:"Chetan Bhagat"}).select({author_id:1,_id:0})
    let savedData= await UserModel.find(Data).select({name:1,_id:0})
    res.send({msg: savedData})    
}
const changePrice = async function (req, res) {
    let savedData= await UserModel.findOneAndUpdate({name:"Two states"},{ price:100},{new:true})
    let data=await UserModel1.findOne({author_id:savedData.author_id})
    res.send({"updatedPrice":savedData.price,"authorName":data.author_name})    
}
const authorBook = async function (req, res) {
    let data= await UserModel.find({$and:[{price:{$gte:50}},{price:{$lte:100}}]})
    let data1=[...new Set(data)]
   
    let data2=[]
    for(let i=0;i<data1.length;i++)
    {
     let s={}
    
     let author=await UserModel1.find({author_id:data1[i].author_id}).select({author_name:1,_id:0})
     s[data1[i].name]=author
     data2.push(s)
    }
    let data3=data2.flat()
    res.send({msg:data2})
}
module.exports.createBook = createBook 
module.exports.createAuthor= createAuthor
module.exports.listOut= listOut
module.exports.changePrice= changePrice
module.exports.authorBook= authorBook