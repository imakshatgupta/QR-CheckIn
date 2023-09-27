import {connect} from "../../../../dbConfig/dbConfig";
import User from "../../../../models/user";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";


connect()


export async function POST(request: NextRequest){
    try {
      
        const reqBody = await request.json()
        const {username, email, password} = reqBody

        console.log(reqBody);

        
        
        //check if user already exists
        const user = await User.findOne({email})
        
        if(user){
          return NextResponse.json({error: "User already exists"}, {status: 400})
        }
        
        //hash password
        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt)
        
        console.log(username, email, hashedPassword);

        try {
          const newUser = new User({
            username,
            email,
            password: hashedPassword
          });
        
          const savedUser = await newUser.save();
          console.log(savedUser);
        
          // Additional logic for success if needed
        } catch (error) {
          console.error(error);
          // Handle the error here, for example, send an error response to the client
        }
        
        


        return NextResponse.json({
            message: "User created successfully",
            success: true,
        })
        
        


    } catch (error) {
        return NextResponse.json({error: error.message}, {status:500})

 }
}
