import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Memberships = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex flex-col items-center justify-center">
        {/* Header Section */}
        <div className="w-full max-w-4xl text-center p-6">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            Choose Your Membership Plan
          </h1>
          <p className="text-lg md:text-xl text-white">
            Join us today and achieve your fitness goals with our tailored membership plans.
          </p>
        </div>

        {/* Membership Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-8 w-full max-w-6xl">
          {/* Basic Plan */}
          <div className="bg-white shadow-lg rounded-lg p-6 md:p-8 border border-gray-300 hover:scale-105 transition-transform duration-300">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-4">
              Basic Plan
            </h2>
            <p className="text-center text-gray-600 text-sm md:text-base mb-6">
              Ideal for beginners who want access to essential equipment and facilities.
            </p>
            <ul className="text-gray-700 mb-6 space-y-2">
              <li>✔️ Access to gym facilities</li>
              <li>✔️ Free group classes</li>
              <li>✔️ Basic trainer support</li>
            </ul>
            <div className="text-center">
              <p className="text-xl font-bold text-gray-800">$150 / month</p>
              <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-gray-600 transition">
                Sign Up
              </button>
            </div>
          </div>

          {/* Premium Plan */}
          <div className="bg-white shadow-lg rounded-lg p-6 md:p-8 border border-gray-300 hover:scale-105 transition-transform duration-300">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-4">
              Premium Plan
            </h2>
            <p className="text-center text-gray-600 text-sm md:text-base mb-6">
              Perfect for fitness enthusiasts who want additional perks and trainer guidance.
            </p>
            <ul className="text-gray-700 mb-6 space-y-2">
              <li>✔️ Access to gym facilities</li>
              <li>✔️ Free group classes</li>
              <li>✔️ Personal training sessions</li>
              <li>✔️ Advanced equipment</li>
            </ul>
            <div className="text-center">
              <p className="text-xl font-bold text-gray-800">$500 / month</p>
              <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-gray-600 transition">
                Sign Up
              </button>
            </div>
          </div>

          {/* Elite Plan */}
          <div className="bg-white shadow-lg rounded-lg p-6 md:p-8 border border-gray-300 hover:scale-105 transition-transform duration-300">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-4">
              Elite Plan
            </h2>
            <p className="text-center text-gray-600 text-sm md:text-base mb-6">
              Best for athletes and individuals aiming for top-level fitness with VIP support.
            </p>
            <ul className="text-gray-700 mb-6 space-y-2">
              <li>✔️ All Premium features</li>
              <li>✔️ VIP trainer access</li>
              <li>✔️ Custom workout plans</li>
              <li>✔️ Nutrition consultations</li>
            </ul>
            <div className="text-center">
              <p className="text-xl font-bold text-gray-800">$1000 / month</p>
              <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-gray-600 transition">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Memberships;
