const mongoose=require('mongoose')

const Schema=mongoose.Schema
const roomSchema=new Schema({
    name:{
        type:String,
        require:true
    },
    occupency:{
        type:String,
        required:true
    },
    bulding:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:'bulding'
    },
    price:{
        type:Number,
        require:true
    }
})

const Room = mongoose.model("Room", roomSchema)
module.exports=Room