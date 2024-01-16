import mongoose from "mongoose";
import { User } from "../../models/User";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    mongoose.connect(process.env.MONGO_URL);

    const createdUser = await User.create(body);
    // const res = {
    //   error: false,
    //   message: "User created successfully",
    //   response: createdUser,
    // };
    return Response.json(createdUser);
  } catch (error) {
    // console.log("error here");
    // const res = {
    //   error: true,
    //   message: "Something went wrong",
    // };
    return Response.json("Something went wrong");
  }
}
