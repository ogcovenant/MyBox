import { NextResponse, NextRequest } from "next/server";
import bcrypt from "bcryptjs";
import { STATUS } from "../../../config/STATUS";
import db from "../../../config/dbconfig";
import jwt from "jsonwebtoken"

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  try {
    const existingUser = await db.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!existingUser) {
      return NextResponse.json(
        { err: "User with email not found" },
        { status: STATUS.notFound }
      );
    }

    const passwordMatch = await bcrypt.compare(password, existingUser.password);

    if (!passwordMatch) {
      return NextResponse.json(
        { err: "Incorrect password" },
        { status: STATUS.notAcceptable }
      );
    }

    const jwtPayload = {
      id: existingUser.id,
      email: existingUser.email
    }

    const token = jwt.sign(jwtPayload, process.env.ACCESS_TOKEN_SECRET as string)

    const response = NextResponse.json(
      { msg: "Login Successful" },
      { status: STATUS.ok }
    );

     response.cookies.set("session", token, {
      expires: new Date().setDate(30),
      secure: true,
      httpOnly: true,
      sameSite:"strict"
    })
    
    return response
  } catch (err) {
    console.log(err)
    return NextResponse.json({ err }, { status: STATUS.serverError });
  }
}
