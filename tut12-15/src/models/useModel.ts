import mongoose from "mongoose";

const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type:String,
        required:true,
        unique:true
    },
    email: {
        type:String,
        required:true
    },
    password: {
        type:String,
        required:true
    },
    isVerified :{
        type:Boolean,
        default:false
    },
    isAdmin : {
        type:Boolean,
        default:false
    },
    forgotPasswordToken:String,
    forgotPasswordTokenExpiry:Date,
    verifyToken:String,
    verifyTokenExpiry:Date,
})

const User = mongoose.models.users || mongoose.model('User',userSchema)

export default User