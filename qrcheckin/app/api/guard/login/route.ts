// import {connect} from "../../../../dbConfig/dbConfig";
// import Guard from "../../../../models/guard";
// import { NextRequest, NextResponse } from "next/server";


// connect()

// export async function POST(request: NextRequest){
//     try {
//         const reqBody = await request.json()
//         const {email, password} = reqBody;
//         console.log(reqBody);
        
//         //check if user exists
//         const guard = await Guard.findOne({ email });
//         if(!guard){
//             return NextResponse.json({error: "User does not exist"}, {status: 400})
//         }
//         console.log("user exists");
        
//         console.log("request.body");
        
//         //check if password is correct
//         // const isMatch = await guard.compare(password, guard.password)
//         console.log(guard.password);

//         const isMatch = guard.password === password;
//         if(!isMatch){
//             return NextResponse.json({error: "Incorrect password"}, {status: 400})
//         }
//         console.log("password is correct");
        
//         const response = NextResponse.json({
//             message: "Login successful",
//             success: true,
//         })        

//         return response;

//     } catch (error: any) {
//         return NextResponse.json({error: error.message}, {status: 500})
//     }
// }


import { connect } from "../../../../dbConfig/dbConfig";
import Guard from "../../../../models/guard";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { email, password } = reqBody;
    console.log(reqBody);

    // Check if user exists
    const guard = await Guard.findOne({ email });
    if (!guard) {
        console.log("User exists");
      return NextResponse.json({ error: "User does not exist" }, { status: 400 });
    }

    // Check if password is correct
    const isMatch = guard.password === password;
    if (!isMatch) {
      return NextResponse.json({ error: "Incorrect password" }, { status: 400 });
    }
    console.log("Password is correct");

    const response = NextResponse.json({
      message: "Login successful",
      success: true,
    });

    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
