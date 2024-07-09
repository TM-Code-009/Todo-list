import { Schema, Types, model, models } from "mongoose";
import { iUserData } from "../interface";


const usermodel = new Schema<iUserData>({
    name:{
        type: String,
    },
    email:{
        type: String,
        unique: true,
    },
    password:{
        type: String,
    },
    avatar:{
        type: String,
    },
    avatarID:{
        type: String,
    },
    todos:[{
        type: Types.ObjectId,
        ref:"Todos"
    }],
},{timestamps:true})

const myusermodel = models.User || model<iUserData>("User",usermodel) 

export default myusermodel