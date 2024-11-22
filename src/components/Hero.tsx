import React from 'react'

const Hero = () => {
  return (
    <div>
    <main >
        {/* Hero Section */}
        <section
          className="grid grid-cols-2 h-screen bg-fix bg-contain sm:bg-right flex items-center justify-center text-center p-4 md:p-0"
          style={{ backgroundImage: 'url(/download.png)', backgroundSize: 'sm', backgroundRepeat: 'no-repeat', margin : "20"}}
        >
          <div className=" bg-black border ml-5 p-8 rounded-lg max-w-xl hover:scale-105 transition-transform duration-300">
            <h1 className="text-2xl md:text-5xl font-bold text-white">Empower Your Gym Management</h1>
            <p className="text-sm md:text-lg text-gray-200 mt-4">Efficient tools for trainers, members, and operations.</p>
            <a
              href="#features"
              className="mt-6 inline-block px-4 py-2 md:px-6 md:py-3 bg-blue-600 text-white font-medium rounded-lg shadow-lg hover:bg-gray-800 hover:scale-105 transition-transform duration-300"
            >
              Learn More
            </a>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-12 bg-#3b3a3a">
          <div className="bg-gray-1000 container mx-auto text-center px-4 md:px-0">
            <div className='bg-black mx-0 rounded-lg py-5'><h2 className="text-2xl md:text-3xl font-bold text-white">Features</h2>
            <p className="text-white mt-2 md:mt-4">Discover tools to manage memberships, schedules, and more!</p></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              <div className="p-6 bg-black text-white rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
                <h3 className="text-lg md:text-xl font-semibold">Membership Management</h3>
                <p className="text-white-600 mt-2 text-sm md:text-base">Track members, subscriptions, and renewals seamlessly.</p>
              </div>
              <div className="p-6 bg-black text-white rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
                <h3 className="text-lg md:text-xl font-semibold">Trainer Scheduling</h3>
                <p className="text-white-600 mt-2 text-sm md:text-base">Easily manage trainer availability and class schedules.</p>
              </div>
              <div className="p-6 bg-black text-white rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
                <h3 className="text-lg md:text-xl font-semibold">Performance Tracking</h3>
                <p className="text-white-600 mt-2 text-sm md:text-base">Monitor progress and provide personalized feedback.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section id="cta" className="py-12 bg-black mx-5 rounded-lg text-white text-center px-4">
          <div className="container mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold">Ready to Streamline Your Gym?</h2>
            <p className="mt-2 md:mt-4 text-sm md:text-lg">Sign up today and see the difference!</p>
            <a
              href="/signup"
              className="mt-4 md:mt-6 inline-block px-4 py-2 md:px-6 md:py-3 bg-blue-700 text-white font-medium rounded-lg shadow-lg hover:bg-gray-800 hover:scale-105 transition-transform duration-300"
            >
              Get Started
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Hero
