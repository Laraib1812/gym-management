import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted");
  };

  return (
    <>
      <Navbar />
      <main
        className="flex flex-col items-center justify-center min-h-screen px-4"
        style={{
          backgroundImage: "url('/communicate.svg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          margin: "20px",
        }}
      >
        <div className="w-full max-w-4xl text-white shadow-lg rounded-lg p-6 md:p-10 bg-opacity-80 bg-gray-900">
          <h1 className="text-3xl md:text-5xl font-bold text-center mb-6">
            Contact Us
          </h1>
          <p className="text-lg text-center mb-8">
            We&apos;d love to hear from you! Reach out to us with your questions or
            feedback.
          </p>

          {/* Contact Form */}
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block font-medium">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full mt-2 p-3 border border-gray-300 text-black rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Ali"
                aria-label="Your Name"
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
                className="w-full mt-2 p-3 border border-gray-300 text-black rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="example@gmail.com"
                aria-label="Your Email"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block font-medium">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full mt-2 p-3 border border-gray-300 text-black rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Write your message here..."
                aria-label="Your Message"
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
