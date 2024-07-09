import { connect } from "mongoose"


export const dbConfig = async () => {
    await connect("mongodb://localhost:27017/todolist").then(()=> {
        console.clear()
        console.log("connected..");
        
    })
}