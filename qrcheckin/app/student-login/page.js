"use client";
import Link from "next/link";
import React from "react";
import {useRouter} from "next/navigation";
import axios from "axios";


export default function LoginPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
      email: "",
      password: "",
     
  })
  const [loading, setLoading] = React.useState(false);

  const isProfileComplete = async () => {
    try {
      const response = await axios.get("/api/student/isProfileComplete");
      console.log("hii" , response.data.isComplete);
        return response.data.isComplete;

    } catch (error) {
      console.error("Error checking profile completeness", error);
      return false;
    }
  };

  const onLogin = async () => {
      try {
          setLoading(true);
          const response = await axios.post("/api/student/login", user);
          console.log("login");
          console.log("Login success", response.data);
          const isComplete = await isProfileComplete();
          console.log("hii" , isComplete);

            console.log("success");
            if (isComplete) {
                router.push("/student-dashboard");
                }
            else {
                // Profile is not complete, you can show a message or handle it as needed
                console.log("Profile is not complete");
                router.push("/profile");
                }
                

      } catch (error) {
          console.log("Login failed", error.message);
      } finally{
      setLoading(false);
      } 
  }

 

  return (
  <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>{loading ? "Processing" : "Login"}</h1>
      <hr />
      
      <label htmlFor="email">email</label>
      <input 
      className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
          id="email"
          type="text"
          value={user.email}
          onChange={(e) => setUser({...user, email: e.target.value})}
          placeholder="email"
          />
      <label htmlFor="password">password</label>
      <input 
      className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
          id="password"
          type="password"
          value={user.password}
          onChange={(e) => setUser({...user, password: e.target.value})}
          placeholder="password"
          />
          <button
          onClick={onLogin}
          className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">Login here</button>
          <Link href="/student-signup">Visit Signup page</Link>
      </div>
  )

}