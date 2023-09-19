"use client"

import Link from 'next/link';
import {useState , useEffect } from 'react';
import {signIn , signOut , useSession, getProviders} from 'next-auth/react';
import {useRouter} from 'next/navigation';

const LandingPage = () => {

  const router = useRouter();

  const {data: session} = useSession();
  

  const [providers, setProviders] = useState(null);

  useEffect(() => {
    const fetchProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };
    fetchProviders();
  }, []);


 

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <header className="bg-blue-500 py-4">
        <div className="container mx-auto text-white text-center">
          <h1 className="text-3xl font-semibold">QR Check-In</h1>
          <p className="mt-2">Streamline hostel entry with QR codes.</p>
        </div>
      </header>



      <section className="bg-blue-500 py-12">
      {session?.user ? (
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-semibold text-white mb-4">Welcome {session.user.name}</h2>
          <br />
          <button
            className="bg-white text-blue-500 hover:bg-blue-400 mx-8 py-2 px-6 rounded-full text-lg font-semibold transition duration-300"
            onClick={() => signOut()}
          >
            Sign Out
          </button>
        </div>
      ): (
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-semibold text-white mb-4">Get Started</h2>
          <br />

          {providers &&
            Object.values(providers).map((provider) => (
              <div key={provider.name}>
                <button
                  className="bg-white text-blue-500 hover:bg-blue-400 mx-8 py-2 px-6 rounded-full text-lg font-semibold transition duration-300"
                  onClick={() => signIn(provider.id)}
                >
                  Student Login
                </button>
              </div>
            ))}
        </div>


      )
      }
      </section>

      <footer className="bg-gray-200 py-4">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} QR Check-In</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;