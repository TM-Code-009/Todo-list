import { dbConfig } from "@/app/utils/dbconfig";
import myusermodel from "@/app/utils/model/usermodel";
import { NextRequest, NextResponse } from "next/server";


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

        const pending = todos.todos.filter((el:any) => {
            return el.status === false
        })
    
        return NextResponse.json({
          message: "Getting todos",
          data: pending,
          status: 201,
        });
    } catch (error) {
        return NextResponse.json({
            message: "unable to get todos",
            status: 404,
          });
    }
}