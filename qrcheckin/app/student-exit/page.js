"use client";

import React , {useState} from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import QRCode from 'qrcode.react';



export default function Location() {
  const router = useRouter();

const [sub, setSub] = useState(false);
    const [qr, setQr] = useState("");

  const done = async () => {
    try {
        await axios.post('/api/student/verifyin')
        router.push('/student-dashboard')
    } catch (error) {
        console.log(error.message);
    }

  }
  


 
  
    const handleLocationSubmit = async (e) => {
      e.preventDefault();
     
      try {
         const qrdata = {
            inDate: new Date().toLocaleDateString(),
            inTime: new Date().toLocaleTimeString(),
        };
        setSub(true);
       setQr(JSON.stringify(qrdata));
        
        
      } catch (error) {
        console.log("Failed", error.message);
      } 
    };

    
    return (
      <div className="bg-gradient-to-b from-blue-500 to-blue-800 min-h-screen flex flex-col justify-center items-center text-white">
        <header className="text-4xl font-semibold mb-4">Coming back to Campus?</header>
        <br />
        <div className="bg-white bg-opacity-20 p-3 rounded-lg shadow-lg text-center">
            
  
              <button
                type="submit"
                onClick={handleLocationSubmit}
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-md transition duration-300"
              >
                IN ENTRY
              </button>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
      {
        sub && (

      <QRCode value={qr} />

        )
      }
        <br />
      {
        sub && (
          <button
                type="submit"
                onClick={done}
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-md transition duration-300"
              >
                DONE
              </button>
        )
      }
      </div>










    );

  
}