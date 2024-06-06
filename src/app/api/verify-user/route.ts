import { NextRequest, NextResponse } from "next/server";
import STATUS from "@/config/STATUS";
import jwt from "jsonwebtoken"

export async function GET (req: NextRequest){
  const cookies = req.cookies;
  const token = String(cookies.get("session")?.value);

  if(!token){
    return NextResponse.json({},{ status: STATUS.forbidden })
  }

  const user = jwt.verify( token, process.env.ACCESS_TOKEN_SECRET as string)


  return NextResponse.json({ user }, { status: STATUS.ok });
};