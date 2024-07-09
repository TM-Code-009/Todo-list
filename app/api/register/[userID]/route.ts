import { dbConfig } from "@/app/utils/dbconfig"
import mytodosmodel from "@/app/utils/model/todosmodel"
import myusermodel from "@/app/utils/model/usermodel"
import { Types } from "mongoose"
import { NextRequest, NextResponse } from "next/server"


export const POST = async (req:NextRequest,{params}:any) => {
    try {
        await dbConfig()
        const {userID} = params
        const {title,description} = await req.json()

        const finduser = await myusermodel.findById(userID)

        if(finduser){
            const todos = await mytodosmodel.create({
                title,description
              });

              const mytodos = await finduser.todos.push(
                new Types.ObjectId(todos._id)
              );
              finduser.save();

              return NextResponse.json({
                message:"todo created successfully",
                status: 200,
                data:{mytodos,todos}
            })
        }

        // const user = await myusermodel.create({name,email,password})

       
    } catch (error) {
        return NextResponse.json({
            message:"can not create todo",
            status: 404,
        })
    }
}


export const GET = async (req:NextRequest,{params}:any) => {
    try {
        const { userID } = params;
        await dbConfig();

    
        const todos = await myusermodel.findById(userID).populate({
          path: "todos",
          options: {
            sort: {
              createdAt: -1,
            },
          },
        });
    
        return NextResponse.json({
          message: "Getting todos",
          data: todos,
          status: 201,
        });
    } catch (error) {
        return NextResponse.json({
            message: "unable to get todos",
            status: 404,
          });
    }
}

export const PATHCH = async(req:NextRequest,{params}:any) => {
    try {
        await dbConfig()
        const {userID} = params;
        const {avatar,avatarID} = await req.json();
        
        const finduser  = await myusermodel.findById(userID)

        if(finduser){
            const user = await myusermodel.findByIdAndUpdate(userID,{avatar,avatarID},{new:true});
           

            return NextResponse.json({
                message: "avatar updated",
                data: user,
                status: 201,
              });

        }else{
            return NextResponse.json({
                message: " unable to updated avatar",
                status: 404,
              });  
        }
       

    } catch (error) {
        return NextResponse.json({
            message: " unable to updated avatar",
            status: 404,
          });
    }
}


