import { connectToDB } from '../../../../dbConfig/dbConfig';
import User from '../../../../models/user';
import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';
import { useRouter } from 'next/navigation';

connectToDB();

export async function POST(request) {

    const router = useRouter();

  try {
    const reqBody = await request.json();
    const { name, email, password, hostel, rollno, roomno, mobile } = reqBody;

    console.log(reqBody);

    // Check if a user with the same email already exists
    const user = await User.findOne({ email });

    if (user) {
      return NextResponse.json({ error: 'User already exists' }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, parseInt(5, 10));

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      hostel,
      rollno,
      roomno,
      mobile,
    });

    const savedUser = await newUser.save();
    console.log(savedUser);

    router.push("/student-login");

  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
