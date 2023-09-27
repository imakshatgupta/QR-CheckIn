"use client";

import React , {useState} from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import QRCode from 'qrcode.react';


export default function Location() {
  const router = useRouter();
  

  const [qr, setQr] = useState(""); 
  const [sub, setSub] = useState(false);

    const [userLocation, setUserLocation] = useState('');

  const logout = async () => {
    try {
        await axios.get('/api/student/logout')
        router.push('/student-login')
    } catch (error) {
        console.log(error.message);
    }

  }
  

  const done = async () => {
    try {
       await axios.post('/api/student/verify')
        router.push('/student-exit')
    } catch (error) {
        console.log(error.message);
    }
  }
  
    const handleLocationSubmit = async (e) => {
      e.preventDefault();
      console.log(userLocation);
      try {

        console.log("Location", userLocation);  
const response = await axios.get("/api/student/qr");
        
        console.log("hii",response.data.qrdata);
        const qrdata = {
          ...response.data.qrdata,
          location: userLocation,
        };
        setSub(true);
        setQr(JSON.stringify(qrdata));
        
        
      } catch (error) {
        console.log("Failed", error.message);
      } 
    };

    
    return (
      <div className="bg-gradient-to-b from-blue-500 to-blue-800 min-h-screen flex flex-col justify-center items-center text-white">
        <header className="text-4xl font-semibold mb-4">Where are you going?</header>
        <br />
        <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg text-center">
          <form className="mt-8 space-y-6" onSubmit={handleLocationSubmit}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="userLocation" className="sr-only">
                  Where are you going?
                </label>
                <input
                  id="userLocation"
                  name="userLocation"
                  type="text"
                  autoComplete="off"
                  required
                  className="mt-4 px-4 py-2 w-full rounded-md bg-gray-100 text-gray-900"
                  placeholder="Location"
                  value={userLocation}
                  onChange={(e) => setUserLocation(e.target.value)}
                />
              </div>
            </div>
  
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-md transition duration-300"
              >
                OUT ENTRY
              </button>
            </div>
          </form>
        </div>
        <br />

        <br />
         
        {sub &&
        <QRCode value={qr} />
        }
        <br />
        {sub &&
        <button
          onClick={done}
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-md transition duration-300"
        >
          Done
        </button>
        }
        
        <br />
        <br />
        <br />
        <br />
        <br />
        <button
          onClick={logout}
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-md transition duration-300"
        >
          Logout
        </button>
      </div>










    );

  
}