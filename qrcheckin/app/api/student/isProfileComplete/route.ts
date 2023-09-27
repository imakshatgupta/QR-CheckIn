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
    
    const isComplete = user.rollno !== undefined &&
    user.rollno !== null &&
    user.rollno.trim() !== "" &&
    user.phone !== undefined &&
    user.phone !== null &&
    user.phone.trim() !== "" &&
    user.hostel !== undefined &&
    user.hostel !== null &&
    user.hostel.trim() !== "" &&
    user.roomno !== undefined &&
    user.roomno !== null &&
    user.roomno.trim() !== "";

    console.log('isComplete', isComplete);
    
   

    // return  isComplete ? NextResponse.redirect("/student-dashboard") : NextResponse.redirect("/profile");

    return NextResponse.json({isComplete});

    // return {isComplete} ;

  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }

}