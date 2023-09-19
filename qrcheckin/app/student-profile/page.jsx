"use client"
import { redirect, useRouter } from 'next/navigation';
import { signOut } from 'next-auth/react';

const StudentProfile = () => {
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      // Sign out the user
      await signOut();
      redirect('/');
    } catch (error) {
      // Log the error to the console
      console.error('Sign-out error:', error);
    }
  };

  return (
    <div>
      <h1>Student Profile</h1>

      {/* Button to trigger the sign-out process */}
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};

export default StudentProfile;