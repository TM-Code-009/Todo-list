import { dbConfig } from "@/app/utils/dbconfig"
import myusermodel from "@/app/utils/model/usermodel"
import { NextRequest, NextResponse } from "next/server"


export const POST = async (req:NextRequest) => {
    try {
        await dbConfig()
        const {email,password} = await req.json()

        const user = await myusermodel.findOne({email})
         
        if(user){
          const check = password === user.password

          if(check){
            return NextResponse.json({
                message:"signin successfully",
                status: 200,
                data:user
            })
          }else{
            return NextResponse.json({
                message:"password incorrect",
                status: 404,
            })
          }
        }else{
            return NextResponse.json({
                message:"user does not exist",
                status: 404,
            })
        }
       
    } catch (error) {
        return NextResponse.json({
            message:"can not create user",
            status: 404,
        })
    }
}