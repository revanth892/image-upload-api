const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const record = new Schema({
    name:{
        type: String,
        require:true,
        default:"NONE"
    },
    url:{
        type: String,
        require:true,
        default:"NONE"
    }
})

module.exports=mongoose.model('Records',record)