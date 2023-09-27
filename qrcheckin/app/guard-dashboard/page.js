"use client"
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import QrReader from 'react-qr-scanner';

function Scanner() {
  const [result, setResult] = useState(null);
  const [wts, setWts] = useState(false)

  const handleScan = (data) => {
    if (data) {
      const currentTime = new Date().toLocaleString();

      const scannedDataWithTime = {
        text: data.text,
        scanTime: currentTime,
      };

      setResult(scannedDataWithTime);
    }
  };


    const Scan = () => {
        setWts(true);
    }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setWts(false);

    if (!result) {
      console.error("No scanned data to submit.");
      return;
    }

    try {
      // Assuming result.text is a JSON string
      const parsedResult = JSON.parse(result.text);

      if (!parsedResult) {
        console.error("Parsed result is null.");
        return;
      }      
      // Create an object with the correct data format

      const dataToSend = {
        username: parsedResult.username,
        rollno: parsedResult.rollno,
        phone:parsedResult.phone,
        hostel: parsedResult.hostel,
        roomno:parsedResult.roomno,
        location:parsedResult.location,
        scanTime: result.scanTime,
      };

      const response = await axios.post(
        'https://sheet.best/api/sheets/ddca6f48-38b0-4d3b-9df5-eb8a27c52690',
        dataToSend
      );

      console.log(response);
    } catch (error) {
      console.error("Axios Error:", error);
    }
  };

  const handleError = (error) => {
    console.error(error);
  };

  useEffect(() => {
    // You can perform any side effects here, if needed
  }, []); // An empty dependency array means this effect runs once, similar to componentDidMount

  return (
    <div className='text-center'>
      <p className='mb-6 mt-6 fw-bold text-lg'>Scan a QR</p>
      <button className='border-none bg-black text-white rounded-md w-20 h-10 mb-5' onClick={Scan}>
          Scan
        </button>
        <br />
        <br />
        <br />
      {wts && (
        <div className='qrScanner mb-10'>
        <QrReader
          className="m-auto mb-10 "
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{ width: '20%', height: '20%' }}
        />
        <button className='border-none bg-black text-white rounded-md w-20 h-10 mb-5' onClick={handleSubmit}>
          Submit
        </button>
        <p>Scanned Data:</p>
        {result && (
          <>
            <p>Text: {result.text}</p>
            <p>Scan Time: {result.scanTime}</p>
          </>
        )}
        </div>
      )}
    </div>
  );
}

export default Scanner;
