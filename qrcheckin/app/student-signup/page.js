"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const StudentSignup = () => {
  const router = useRouter();

  const [user, setUser] = React.useState({
    email: "",
    password: "",
    confirmpassword: "",
    name: "",
    rollno: "",
    hostel: "",
    roomno: "",
    mobile: "",
  });

  const [loading, setLoading] = React.useState(false);

  const handleSignup = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/student/signup", user);
      console.log("Signup success", response.data);
      router.push("/student-login");
    } catch (error) {
      console.log("Signup failed", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-b from-blue-500 to-blue-800 min-h-screen flex flex-col justify-center items-center text-white">
      <header className="text-4xl font-semibold mb-4">
        Welcome to Hostel Entry
      </header>
      <br />
      <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-semibold mb-4">
          {loading ? "Creating Account" : "Student Signup"}
        </h2>

        <form className="mt-8 space-y-6" onSubmit={handleSignup}>
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="mt-1 px-4 py-2 w-full rounded-md bg-gray-100 text-gray-900"
                placeholder="Name"
                value={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Student Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="mt-1 px-4 py-2 w-full rounded-md bg-gray-100 text-gray-900"
                placeholder="Institute Email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            </div>
            <div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="mt-1 px-4 py-2 w-full rounded-md bg-gray-100 text-gray-900"
                  placeholder="Password"
                  value={user.password}
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                />
              </div>
              <div>
                <label htmlFor="confirmpassword" className="sr-only">
                  Confirm Password
                </label>
                <input
                  id="confirmpassword"
                  name="confirmpassword"
                  type="password"
                  required
                  className="mt-1 px-4 py-2 w-full rounded-md bg-gray-100 text-gray-900"
                  placeholder="Confirm Password"
                  value={user.password}
                  onChange={(e) =>
                    setUser({ ...user, confirmpassword: e.target.value })
                  }
                />
              </div>
              <label htmlFor="rollno" className="sr-only">
                Roll Number
              </label>
              <input
                id="rollno"
                name="rollno"
                type="text"
                required
                className="mt-1 px-4 py-2 w-full rounded-md bg-gray-100 text-gray-900"
                placeholder="Roll Number"
                value={user.rollno}
                onChange={(e) => setUser({ ...user, rollno: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="hostel" className="sr-only">
                Hostel
              </label>
              <input
                id="hostel"
                name="hostel"
                type="text"
                required
                className="mt-1 px-4 py-2 w-full rounded-md bg-gray-100 text-gray-900"
                placeholder="Hostel"
                value={user.hostel}
                onChange={(e) => setUser({ ...user, hostel: e.target.value })}
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
                required
                className="mt-1 px-4 py-2 w-full rounded-md bg-gray-100 text-gray-900"
                placeholder="Room Number"
                value={user.roomno}
                onChange={(e) => setUser({ ...user, roomno: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="mobile" className="sr-only">
                Mobile Number
              </label>
              <input
                id="mobile"
                name="mobile"
                type="text"
                required
                className="mt-1 px-4 py-2 w-full rounded-md bg-gray-100 text-gray-900"
                placeholder="Mobile Number"
                value={user.mobile}
                onChange={(e) => setUser({ ...user, mobile: e.target.value })}
              />
            </div>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-md transition duration-300"
            >
              Sign up
            </button>
            <Link
              href="/student-login"
              className="text-blue-100 hover:underline"
            >
              Visit login page
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentSignup;
