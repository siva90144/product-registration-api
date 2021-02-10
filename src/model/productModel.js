import mongoose from 'mongoose';


const Schema = mongoose.Schema;

export const ProductSchema= new Schema({
    firstName:{
        type: String,
        required: 'Enter FirstName.'
    },
    lastName:{
        type: String,
        required: 'Enter LastName.'
    },
    
    emailID:{
        type: String
    },
    
    phoneNumber:{
        type: Number,
        
    },
    
    created_Date:{
        type: Date,
        default:Date.now
    }
});