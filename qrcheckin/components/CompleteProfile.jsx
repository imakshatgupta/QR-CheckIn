import { useEffect, useState } from 'react';

const CompleteProfileForm = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [hostelName, setHostelName] = useState('');
  const [roomNumber, setRoomNumber] = useState('');
  const [rollNumber, setRollNumber] = useState('');

  const handleSubmit = async (e) => {


   


    e.preventDefault();

    // You can perform validation here if needed

    // Prepare the profile data to be submitted
    const profileData = {
      mobileNumber,
      hostelName,
      roomNumber,
      rollNumber,
    };

    // You can now submit this data to your backend or store it as needed
    // For example, you can make an API request to save the profile data

    // After successfully saving the data, you can redirect the user to the desired page
    // You can use Next.js router or any routing library of your choice for navigation
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-700">
          Mobile Number
        </label>
        <input
          type="text"
          id="mobileNumber"
          name="mobileNumber"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
          className="border border-gray-300 rounded-md p-2 w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="hostelName" className="block text-sm font-medium text-gray-700">
          Hostel Name
        </label>
        <input
          type="text"
          id="hostelName"
          name="hostelName"
          value={hostelName}
          onChange={(e) => setHostelName(e.target.value)}
          className="border border-gray-300 rounded-md p-2 w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="roomNumber" className="block text-sm font-medium text-gray-700">
          Room Number
        </label>
        <input
          type="text"
          id="roomNumber"
          name="roomNumber"
          value={roomNumber}
          onChange={(e) => setRoomNumber(e.target.value)}
          className="border border-gray-300 rounded-md p-2 w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="rollNumber" className="block text-sm font-medium text-gray-700">
          Roll Number
        </label>
        <input
          type="text"
          id="rollNumber"
          name="rollNumber"
          value={rollNumber}
          onChange={(e) => setRollNumber(e.target.value)}
          className="border border-gray-300 rounded-md p-2 w-full"
          required
        />
      </div>
      <div className="mt-6">
        <button
          type="submit"
          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600"
          onClick={handleSubmit}
        >
          Save Profile
        </button>
      </div>
    </form>
  );
};

export default CompleteProfileForm;
