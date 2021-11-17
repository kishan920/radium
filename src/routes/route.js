const express = require('express');
const router = express.Router();
const UserModel1= require("../models/userModel1")
const UserModel= require("../models/userModel")
const UserController= require("../controllers/userController")


router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

router.post('/createBook',  UserController.createBook  );
router.post('/createAuthor',  UserController.createAuthor  );
router.get('/listOut',  UserController.listOut);
router.get('/changePrice',  UserController.changePrice);
router.get('/authorBook',  UserController.authorBook);


module.exports = router;