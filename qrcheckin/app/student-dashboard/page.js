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

  const isProfileComplete = async () => {
    try {
      const response = await axios.get("/api/student/isProfileComplete");
      return true;
    } catch (error) {
      console.error("Error checking profile completeness", error);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/student/profile", user);
      console.log("Profile update success", response.data);
      const isComplete = await isProfileComplete();
      if (isComplete) {
        router.push("/student-dashboard");
      } else {
        // Profile is not complete, you can show a message or handle it as needed
        console.log("Profile is not complete");
      }
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

