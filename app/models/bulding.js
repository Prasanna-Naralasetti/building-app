const mongoose = require('mongoose')

const Schema = mongoose.Schema
const buldingSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    contact: {
        type: Number,
        require: true
    },
    geography:{
        latitude:{
        type:String,
        default: 12.942117
        },
        longitude:{
            type:String,
            default: 77.575363
        }
    },
    buldingType: {
        type: String,
        require: true
    }

})

const Bulding = mongoose.model('Bulding', buldingSchema)
module.exports = Bulding