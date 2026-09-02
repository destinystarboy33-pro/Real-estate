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
    },

    oldPrice :{
        type: Number,
        required: false
    },

    description:{
        type: String,
        required: true
    },

    distance:{
        type: Number,
        required: false
    }



})

const Property = mongoose.model('Property', propertySchema)


export default Property