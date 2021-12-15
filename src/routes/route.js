const express = require('express');
const router = express.Router();
const urlController = require('../Controllers/urlController')
const redirect = require('../Controllers/redirect')
router.post('/url/shorten', urlController.shortenUrl)
router.get('/:urlCode', redirect.getUrl)
module.exports = router;
