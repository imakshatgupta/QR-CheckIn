import React from "react";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div className="bg-gradient-to-b from-blue-500 to-blue-800 min-h-screen flex flex-col justify-center items-center text-white">
      <header className="text-4xl font-semibold mb-6">
        Welcome to Hostel Entry
      </header>
      <div className="space-y-6">
        <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-semibold mb-4">Student Login</h2>
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-md transition duration-300">
            <Link href="/student-login">Login as Student</Link>
          </button>
        </div>
        <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-semibold mb-4">Guard Login</h2>
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-md transition duration-300">
            <Link href="/guard-login">Login as Guard</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
