const path = require('path')
const cloudinary = require('../config/cloudinary-config.js')
const upload = require('../middleware/multermiddle.js')
const Record = require('../models/record.js')

const uploadcon = async (req, res, next) => {
    // if(!req.file)
    // {
    //     return res.status(400).json({message:'No file uploaded'});
    // }
    // const filePath=req.file.path;
    // res.status(200).json({ message: 'File uploaded successfully', filePath });
    console.log(req.body.name)
    cloudinary.uploader.upload(req.file.path, function (err, result) {
        if (err) {
            console.log(err);
            return res.status(500).json({
                success: false,
                message: "Error"
            })
        }

        // console.log(result.secure_url,req.name)
        req.url = result.secure_url
        req.name =req.body.name
        // return res.status(200).json({
        //     success: true,
        //     message: "uploaded",
        //     data: result,
        //     // ans:req.name
        // })
        // req
        next()
    })
}

const addtodb = async(req, res) => {
    console.log(req.name, req.url)
    let name=req.name
    let url=req.url
    try {
        const record = new Record({name,url});

        await record.save();

        res.status(201).json({ message: "record created successfully" });
    } catch (err) {
        console.error("Error creating record:", err);
        res.status(500).json({ message: "Internal server error" });
    }
}
const getallurls = async (req, res) => {
    try {
        const allRecords = await Record.find({})
        res.status(201).json({ message: "Records fetched suuccessfully", data: allRecords })
    }
    catch (err) {
        console.error("Error fetching record:", err)
        res.status(500).json({ message: "Internal server error" });
    }
}

module.exports = { uploadcon, addtodb,getallurls };