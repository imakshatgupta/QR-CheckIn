import {connect} from '../../../../dbConfig/dbConfig';
import User from '../../../../models/user';
import { NextRequest, NextResponse } from 'next/server';
import bcryptjs from 'bcryptjs';

connect();

export async function POST (request: NextRequest){
    try {
        const reqBody = await request.json();
        const {name , email , password , hostel , rollno , roomno , mobile} = reqBody

        console.log(reqBody);

        const user = await User.findOne({email})

        if(user){
            return NextResponse.json({error: "User already exists"}, {status: 400})
        }

        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt)

        const newUser = new User({
        
            name,
            email,
            password: hashedPassword,
            hostel,
            rollno,
            roomno,
            mobile,

        })

        const savedUser = await newUser.save()
        console.log(savedUser);

        return NextResponse.json({
            message: "User created successfully",
            success: true,
            savedUser
        })

                 
    } catch (error) {
        return NextResponse.error(error);
    }
}