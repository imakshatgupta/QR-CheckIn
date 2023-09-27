import { connect } from "../../../../dbConfig/dbConfig";
import User from "../../../../models/user";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

connect();

export async function POST(request: NextRequest) {
  try {
    // Check if the request has a body
    if (!request.body) {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    console.log("request.body");

    const reqBody = await request.json();
    const { rollno, phone, idCardImage, hostel, roomno } = reqBody;

    // Check if the request has all the required fields
    if (!rollno || !phone || !idCardImage || !hostel || !roomno) {
      return NextResponse.json(
        { error: "Please fill in all the fields" },
        { status: 400 }
      );
    }
    
    // Get the token from the request cookies
    const token = request.cookies.get('token')?.value || '';
    
    // Verify the token and get the user ID
    
    const decoded = jwt.verify(token, "nextjsyoutubeisoknotbut");
    
    
    
    if (!decoded || !decoded.id) {
      return NextResponse.json(
        { error: "User not authenticated" },
        { status: 401 }
        );
      }
      
      const userId = decoded.id; // Corrected to 'decoded.id'
      
      // Find the user by their ID
      const user = await User.findById(userId);
      
      if (!user) {
        return NextResponse.json({ error: "User not found" }, { status: 404 });
      }
      
      // Update the user's profile data
      user.rollno = rollno;
      user.phone = phone;
      user.hostel = hostel;
      user.roomno = roomno;
      
      // Save the updated user data to the database
      await user.save();
      
      return NextResponse.json({
        message: "Profile updated successfully",
        success: true,
      });
    } catch (error) {
      console.error(error);
      return NextResponse.json(
        { error: "Internal Server Error" },
        { status: 500 }
    );
  }
}

