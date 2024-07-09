import { Schema, Types, model, models } from "mongoose";
import { iTodosData, iUserData } from "../interface";


const todosmodel = new Schema<iTodosData>({
    title:{
        type: String,
        unique: true,
    },
    description:{
        type: String,
    },
    status:{
        type: Boolean,
        default: false,
    },
    user:{
        type: Types.ObjectId,
        ref:"User"
    },
},{timestamps:true})

const mytodosmodel = models.Todos || model<iTodosData>("Todos",todosmodel) 

export default mytodosmodel