const express = require('express')
const upload=require('../middleware/multermiddle.js')
const uploadcon=require('../controllers/uploadcontroller.js')
const router =express.Router();

router.post('/upload',upload.single('image'),uploadcon)

module.exports=router;