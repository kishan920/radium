const express = require('express');

const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});
router.get('/movies', function (req, res) {
    const array=['king','thor','rohit','virat','sholay']
    res.send(array)
});
router.get('/movies/:index', function (req, res) {
    const array=['king','thor','rohit','virat','sholay']
    const value=req.params.index
    if(value<array.length)
    res.send(array[value])
    else
    res.send("index no is greater")
});
router.get('/movies1', function (req, res) {
    let array=[{
        id: 1,
        name: "The Shining"
       }, {
        id: 2,
        name: "Incendies"
       }, {
        id: 3,
        name: "Rang de Basanti"
       }, {
        id: 4,
        name: "Finding Demo"
       }]
    res.send(array)
});
router.get('/movies1/:index', function (req, res) {
    let array=[{
        id: 1,
        name: "The Shining"
       }, {
        id: 2,
        name: "Incendies"
       }, {
        id: 3,
        name: "Rang de Basanti"
       }, {
        id: 4,
        name: "Finding Demo"
       }]
    const value=req.params.index
    let no=0
    for(let i=0;i<array.length;i++){
        if(array[i].id==value)
        {
            res.send(array[i])
            no=1
            break
        }
     }
     if(no==0)
     res.send("invalid no")
});
module.exports = router;