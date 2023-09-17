

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
   

      

      {/* Call to Action */}
      <section className="bg-blue-500 py-12 text-center">
          <h2 className="text-2xl font-semibold text-white mb-4">Get Started</h2>
        <div className=" text-center main-container mx-3 gap-3 grid place-content-center">
          <br></br>
          <a href="/guard-login" className="bg-white text-blue-500 hover:bg-blue-400 mx-8 py-2 px-6 rounded-full text-lg font-semibold transition duration-300">
            Guard Login
          </a>
          <a href="/student-login" className="bg-white text-blue-500 hover:bg-blue-400 mx-8 py-2 px-6 rounded-full text-lg font-semibold transition duration-300">
            Student Login
          </a>
          <a href="/authority-login" className="bg-white text-blue-500 hover:bg-blue-400 mx-8 py-2 px-6 rounded-full text-lg font-semibold transition duration-300">
            Authority Login
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
