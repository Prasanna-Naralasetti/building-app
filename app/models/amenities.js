const mongoose=require('mongoose')

const Schema=mongoose.Schema
const amentieSchema=new Schema({
    name:[String],
    required:true
})

const Amenties = mongoose.model('Amenties', amentieSchema)
// module.exports = Amenties