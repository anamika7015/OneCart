import mongoose from "mongoose";

const userSchema = new mongoose.schema({
    name: {
        type : String,
        required : true
    },
    email: {
        type : String,
        required : true,
        unique : true
    },
    password: {
        type : String,
        required : true
    },
    cartData :{
        type : Object,
        default : {}
    }
}
,{timestamps : true, minimize : false})

const user  = mongoose.Model('User', userSchema);

export default user;