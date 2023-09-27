"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function StudentProfile() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    rollno: "",
    phone: "",
    idCardImage: "",
    hostel: "",
    roomno: "",
  });

  // const isProfileComplete = async () => {
  //   try {
  //     const response = await axios.get("/api/student/isProfileComplete");
  //     return true;
  //   } catch (error) {
  //     console.error("Error checking profile completeness", error);
  //     return false;
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/student/profile", user);
      console.log("profile");
      // console.log("Profile update success", response.data);
      // const isComplete = await isProfileComplete();

      // console.log("success");
      // console.log(isComplete);
      // if (isComplete) {
        router.push("/student-dashboard");
      // } else {
      //   // Profile is not complete, you can show a message or handle it as needed
      //   console.log("Profile is not complete");
      // }
    } catch (error) {
      console.log("Profile update failed", error.message);
    }
  };

  const logout = async () => {
    try {
        await axios.get('/api/student/logout')
        router.push('/student-login')
    } catch (error) {
        console.log(error.message);
    }

  }


  return (
    <div className="bg-gradient-to-b from-blue-500 to-blue-800 min-h-screen flex flex-col justify-center items-center text-white">
      <header className="text-4xl font-semibold mb-4">Student Profile</header>
      <br />
      <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-semibold mb-4">Update Profile</h2>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="rollno" className="sr-only">
                Roll No
              </label>
              <input
                id="rollno"
                name="rollno"
                type="text"
                autoComplete="off"
                required
                className="mt-4 px-4 py-2 w-full rounded-md bg-gray-100 text-gray-900"
                placeholder="Roll No"
                value={user.rollno}
                onChange={(e) => setUser({...user, rollno: e.target.value})}
              />
            </div>
            <div>
              <label htmlFor="phone" className="sr-only">
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="text"
                autoComplete="off"
                required
                className="mt-4 px-4 py-2 w-full rounded-md bg-gray-100 text-gray-900"
                placeholder="Phone Number"
                value={user.phone}
                onChange={(e) => setUser({...user, phone: e.target.value})}
              />
            </div>
            <div className="flex flex-col items-start ">
              <label htmlFor="idCardImage" className="text-white mt-4">
                Upload Your College ID Card Photo
              </label>
              <input
                id="idCardImage"
                name="idCardImage"
                type="file"
                accept="image/*"
                onChange={ (e) => setUser({...user, idCardImage: e.target.files[0]})}
              />
            </div>
            <div >
              <label htmlFor="hostel" className="sr-only ">
                Hostel Name
              </label>
              <input
                id="hostel"
                name="hostel"
                type="text"
                autoComplete="off"
                required
                className="mt-4 px-4 py-2 w-full rounded-md bg-gray-100 text-gray-900"
                placeholder="Hostel Name"
                value={user.hostel}
                onChange={(e) => setUser({...user, hostel: e.target.value})}
              />
            </div>
            <div>
              <label htmlFor="roomno" className="sr-only">
                Room Number
              </label>
              <input
                id="roomno"
                name="roomno"
                type="text"
                autoComplete="off"
                required
                className="mt-4 px-4 py-2 w-full rounded-md bg-gray-100 text-gray-900"
                placeholder="Room Number"
                value={user.roomno}
                onChange={(e) => setUser({...user, roomno: e.target.value})}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="text-sm">
              <a
                href="/"
                className="font-medium text-indigo-200 hover:text-indigo-300"
              >
                Back to Home
              </a>
            </div>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-md transition duration-300"
            >
              Update Profile
            </button>
            <br />
            <br />
            <Link href="/">
              Back to Login
            </Link>
          </div>
        </form>
      </div>

<button
    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-md transition duration-300"
    onClick={() => logout()}

>
    Logout
</button>
        
    </div>
  );
};

