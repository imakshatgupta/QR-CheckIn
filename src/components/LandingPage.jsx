import React from 'react';

const LandingPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-blue-500 py-4">
        <div className="container mx-auto text-white text-center">
          <h1 className="text-3xl font-semibold">QR Check-In</h1>
          <p className="mt-2">Streamline hostel entry with QR codes.</p>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-4 shadow-lg rounded bg-white">
              <h3 className="text-xl font-semibold mb-2">QR Code Entry</h3>
              <p>Generate and scan QR codes for seamless hostel entry.</p>
            </div>

            {/* Feature 2 */}
            <div className="p-4 shadow-lg rounded bg-white">
              <h3 className="text-xl font-semibold mb-2">Real-time Monitoring</h3>
              <p>Monitor entry and exit in real-time from a centralized dashboard.</p>
            </div>

            {/* Feature 3 */}
            <div className="p-4 shadow-lg rounded bg-white">
              <h3 className="text-xl font-semibold mb-2">Security and Notifications</h3>
              <p>Ensure hostel security with instant notifications for unusual activities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-500 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-semibold text-white mb-4">Ready to Get Started?</h2>
          <a href="/login" className="bg-white text-blue-500 hover:bg-blue-400 py-2 px-6 rounded-full text-lg font-semibold transition duration-300">
            Get Started
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-200 py-4">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} QR Check-In</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
