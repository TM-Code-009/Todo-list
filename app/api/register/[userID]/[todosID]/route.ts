import { dbConfig } from "@/app/utils/dbconfig";
import myusermodel from "@/app/utils/model/usermodel";
import { NextRequest, NextResponse } from "next/server";



export const PATHCH = async(req:NextRequest,{params}:any) => {
    try {
        await dbConfig()
        const {userID,todoID} = params;
        
        const finduser  = await myusermodel.findById(userID)

        if(finduser){
            const user = await myusermodel.findByIdAndUpdate(todoID,{status:true},{new:true});
           

            return NextResponse.json({
                message: "status updated",
                data: user,
                status: 201,
              });

        }else{
            return NextResponse.json({
                message: " unable to updated status",
                status: 404,
              });  
        }
       

    } catch (error) {
        return NextResponse.json({
            message: " unable to updated status",
            status: 404,
          });
    }
}


export const DELETE = async(req:NextRequest,{params}:any) => {
    try {
        await dbConfig()
        const {userID,todoID} = params;
        
        
        const finduser  = await myusermodel.findById(userID)
            
       if(finduser){
        const todod = await myusermodel.findByIdAndDelete(todoID,{new:true});

        return NextResponse.json({
            message: "todo deleted",
            data: todod,
            status: 201,
          });

       }
       

    } catch (error) {
        return NextResponse.json({
            message: " unable to delete todo",
            status: 404,
          });
    }
}