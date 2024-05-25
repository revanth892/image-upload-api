const express = require('express')
const upload=require('../middleware/multermiddle.js')
const {uploadcon,addtodb,getallurls}=require('../controllers/uploadcontroller.js')
const router =express.Router();

router.post('/upload',upload.single('image'),uploadcon,addtodb)
router.get('/geturls',getallurls)
module.exports=router;

