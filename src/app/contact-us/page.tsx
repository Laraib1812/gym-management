import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Contact = () => {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-screen px-4">
        <div className="w-full max-w-4xl text-white shadow-lg rounded-lg p-6 md:p-10">
          <h1 className="text-3xl md:text-5xl font-bold text-center  mb-6">
            Contact Us
          </h1>
          <p className="text-lg text-center mb-8">
            We'd love to hear from you! Reach out to us with your questions or
            feedback.
          </p>

          {/* Contact Form */}
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block  font-medium">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full mt-2 p-3 border border-gray-300 text-black rounded-lg focus:ring-2 focus:ring-blue-500 hover:scale-105"
                placeholder="Ali"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-medium">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full mt-2 p-3 border border-gray-300 text-black rounded-lg focus:ring-2 focus:ring-blue-500 hover:scale-105"
                placeholder="example@gmail.com"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-white font-medium">
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                className="w-full mt-2 p-3 border border-gray-300 text-black rounded-lg focus:ring-2 focus:ring-blue-500 hover:scale-105"
                placeholder="Write your message here..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-lg font-bold hover:bg-gray-600 transition hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
