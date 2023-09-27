import { getDataFromToken } from "../../../../helpers/getDataFromToken";
import { NextRequest, NextResponse } from "next/server";
import User from "../../../../models/user";
import { connect } from "../../../../dbConfig/dbConfig";


connect();


export async function GET (request:NextRequest ){
  
  
  
  try {
    const userId = await getDataFromToken(request);
    console.log('userId');
    
    const user = await User.findOne({_id: userId}).select("-password");
    
    
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    
    const qrdata = {
      username: user.username,
      rollno: user.rollno,
      phone: user.phone,
      hostel: user.hostel,
      roomno: user.roomno,
      // location: userLocation,
    }
    
    

   console.log(qrdata);

     return NextResponse.json({qrdata}, { status: 200 });  
  }
  catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }


}