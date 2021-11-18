const express = require('express');
const router = express.Router();
const authorModel= require("../models/authorModel.js")
const bookModel= require("../models/bookmodel.js")
const UserController= require("../controllers/userController")


router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

router.post('/createauthor',  UserController.createauthor  );
router.post('/createbook',  UserController.createbook  );
router.get('/getbook',  UserController.getbook  );
router.post('/publish',  UserController.publish  );


module.exports = router;