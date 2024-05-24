 const path = require('path')
 const cloudinary=require('../config/cloudinary-config.js')
 const upload =require('../middleware/multermiddle.js')
 const uploadcon=async(req,res)=>{
    // if(!req.file)
    // {
    //     return res.status(400).json({message:'No file uploaded'});
    // }
    // const filePath=req.file.path;
    // res.status(200).json({ message: 'File uploaded successfully', filePath });
    cloudinary.uploader.upload(req.file.path,function(err,result){
    if(err)
    {
        console.log(err);
        return res.status(500).json({
            success:false,
            message:"Error"
        })
    } 
    return res.status(200).json({
        success:true,
        message:"uploaded",
        data:result
    })
    })
 }

 module.exports=uploadcon;