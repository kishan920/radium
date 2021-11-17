const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel")

const UserController= require("../controllers/userController")


router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

router.post('/createBook',  UserController.createBook );
router.get('/getAllBook',  UserController.bookList );
router.post('/yearbook',  UserController.getBooksInYear );
router.post('/getbook',  UserController.getParticularBooks );
router.get('/getx',  UserController.getXINRBooks );
router.get('/getrbook',  UserController.getRandomBooks );
module.exports = router;