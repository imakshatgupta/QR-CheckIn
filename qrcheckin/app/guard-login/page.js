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

  

  const onLogin = async () => {
      try {
          setLoading(true);

          const response = await axios.post("/api/guard/login", user);
          router.push("/guard-dashboard");
      } catch (error) {
          console.log("Login failed", error.message);
      } finally{
      setLoading(false);
      } 
  }

 

  return (
    <div className="bg-gradient-to-b from-blue-500 to-blue-800 text-white flex flex-col items-center justify-center min-h-screen py-2 gap-3">
        
            <h1 className="signin_text text-2xl">{loading ? "Processing" : "Login"}</h1>
            <hr />

            <label htmlFor="email">Email</label>
            <input
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                id="email"
                type="text"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                placeholder="Email"
            />
            <label htmlFor="password">Password</label>
            <input
                className="p-2 border  border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                id="password"
                type="password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                placeholder="Password"
            />
            <button
                onClick={onLogin}
                className="p-2 bg-green-500 hover:bg-green-600 text-white  rounded-md mb-4 ">Login here</button>
        
    </div>
    )

}