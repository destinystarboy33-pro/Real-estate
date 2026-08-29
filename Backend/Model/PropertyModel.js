import mongoose from "mongoose";

const propertySchema = new mongoose.Schema({

    image:{
     type:String,
     required: true
    },

    name:{
        type:String,
        required: true
    },

    location:{
        type: String,
        required:true
    },

    views:{
        type:Number,
        required: true,
    },

    price :{
       type: Number,
       required: true
    }


})

const Property = mongoose.model('Property', propertySchema)


export default Property