import {NextResponse, NextRequest } from "next/server"
import { v4 as uuid } from "uuid"
import bcrypt from "bcryptjs"
import {STATUS} from "../../../config/STATUS"
import db from "../../../config/dbconfig"


type USER = {
  id: string,
  email: string,
  password: string
}

export async function POST(req: NextRequest) {
  
  const noOfUsers = await db.user.count()

  if(noOfUsers >= 10) {
    return NextResponse.json({ err: "The maximum number of users reached for this application. If you want access contact the developer" }, { status: STATUS.forbidden })
  }

  const { email, password } = await req.json()

  try{

    const existingUser = await db.user.findUnique({
      where: {
        email: email
      }
    })

    if(existingUser){
      return NextResponse.json({ err: "User with email already exists" }, { status: STATUS.conflict })
    }
  }catch(err){
    return NextResponse.json({},{status: STATUS.serverError})
  }

  const hashedPassword = await bcrypt.hash( password, 12 )
  
  const userData:USER = {
    id: uuid(),
    email: email,
    password: hashedPassword 
  }

  try{
    await db.user.create({
      data: userData
    })
  }catch(err){
    return NextResponse.json({},{status: STATUS.serverError})
  }

  return NextResponse.json({ msg: "User created successfully" }, { status: STATUS.ok })

}