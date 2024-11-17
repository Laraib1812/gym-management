import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-screen">
        {/* About Us Section */}
        <div className="w-full max-w-4xl px-4 md:px-8 mb-8 ">
          <div className="bg-black text-white p-6 md:p-10 rounded-lg">
            <h1
              className="text-3xl md:text-5xl font-bold my-6 text-center"
            >
              About Us
            </h1>
            <p className="text-base md:text-lg text-center">
              CrossFitGym is dedicated to helping you achieve your fitness
              goals with state-of-the-art equipment and professional trainers.
            </p>
          </div>
        </div>

        {/* Mission and Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl px-4 md:px-8">
          {/* Mission Section */}
          <div className="bg-black text-white p-6 md:p-8 rounded-lg">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
              Our Mission
            </h2>
            <p className="text-sm md:text-lg text-justify">
              At CrossFitGym, our mission is to inspire and empower individuals to
              lead healthier and more fulfilling lives. We believe fitness is
              not just about building muscles or losing weight—it’s about
              improving your overall well-being, boosting confidence, and
              achieving balance in life.
            </p>
          </div>

          {/* Values Section */}
          <div className="bg-black text-white p-6 md:p-8 rounded-lg">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
              Our Values
            </h2>
            <p className="text-sm md:text-lg text-justify">
              Commitment: We are dedicated to helping you achieve your fitness
              goals. Community: We believe in building strong relationships and
              fostering a sense of belonging. Excellence: We continuously strive
              to improve and provide the best experience for our members.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default About;
