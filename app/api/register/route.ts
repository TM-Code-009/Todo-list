import { dbConfig } from "@/app/utils/dbconfig"
import myusermodel from "@/app/utils/model/usermodel"
import { NextRequest, NextResponse } from "next/server"


export const POST = async (req:NextRequest) => {
    try {
        await dbConfig()
        const {name,email,password} = await req.json()

        const user = await myusermodel.create({name,email,password})

        return NextResponse.json({
            message:"user created successfully",
            status: 200,
            data:user
        })
    } catch (error) {
        return NextResponse.json({
            message:"can not create user",
            status: 404,
        })
    }
}


export const GET = async (req:NextRequest) => {
  try {
      const users = await myusermodel.find()
    await dbConfig()
    

    return NextResponse.json({
        message:"users found",
        status: 200,
        data:users
    })
  } catch (error) {
    return NextResponse.json({
        message:"can not get users",
        status: 404,
    })
  }
}


