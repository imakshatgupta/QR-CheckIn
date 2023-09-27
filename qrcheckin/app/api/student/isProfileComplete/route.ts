import { getDataFromToken } from "../../../../helpers/getDataFromToken";
import { NextRequest, NextResponse } from "next/server";
import User from "../../../../models/user";
import { connect } from "../../../../dbConfig/dbConfig";

connect();

export async function GET(request:NextRequest){

  
  
  try {
    const userId = await getDataFromToken(request);
    const user = await User.findOne({_id: userId}).select("-password");
    
    
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    
    const isComplete = user.rollno && user.phone && user.idCardImage && user.hostel && user.roomno;
    
    return NextResponse.json({ isComplete });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }

}