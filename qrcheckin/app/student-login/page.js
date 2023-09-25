"use client";
import { useState } from "react";
import Link from "next/link";

const StudentLogin = () => {
  const [studentEmail, setstudentEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    // Implement your login logic here
    console.log("Logging in as student", studentEmail);
  };

  return (
    <div className="bg-gradient-to-b from-blue-500 to-blue-800 min-h-screen flex flex-col justify-center items-center text-white">
      <header className="text-4xl font-semibold mb-4">
        Welcome to Hostel Entry
      </header>
      <br />
      <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-semibold mb-4">Student Login</h2>

        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="studentEmail" className="sr-only">
                Student email   
              </label>
              <input
                id="studentEmail"
                name="studentEmail"
                type="text"
                autoComplete="studentEmail"
                required
    className="mt-1 px-4 py-2 w-full rounded-md bg-gray-100 text-gray-900"

                placeholder="Student Email"
                value={studentEmail}
                onChange={(e) => setstudentEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="mt-1 px-4 py-2 w-full rounded-md bg-gray-100 text-gray-900"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="text-sm">
              <a
                href="/"
                className="font-medium text-indigo-200 hover:text-indigo-300"
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <div className="text-center">
  <button
    type="submit"
    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-md transition duration-300"
  >
    Sign In
  </button>
    <br />
    <br />
    Don't have an account?
  <p className="mt-4 text-blue-100 hover:underline">
    <Link href="/student-signup">
      Sign up
    </Link>
    </p>    
  
</div>

        </form>
      </div>
    </div>
  );
};

export default StudentLogin;

