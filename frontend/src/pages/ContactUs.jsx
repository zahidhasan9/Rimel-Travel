import React, { useState } from "react";
import Swal from "sweetalert2";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      Swal.fire({
        icon: "error",
        title: "Incomplete Fields",
        text: "Please fill in all fields before sending.",
      });
      return;
    }

    // Realistic demo success
    Swal.fire({
      icon: "success",
      title: "Message Sent",
      text: "Thank you! Your message has been received. We will contact you soon.",
      timer: 2500,
      showConfirmButton: false,
    });

    // clear form
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="bg-gray-50 py-16 px-6 lg:px-36 min-h-screen">
      <section className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white p-10 rounded-2xl shadow-md">
          <h2 className="text-3xl font-bold text-[#41A4FF] mb-6">
            Contact Us
          </h2>
          <p className="text-gray-600 mb-8">
            Have questions about traveling in Bangladesh? Send us a message and
            our travel experts will get back to you promptly.
          </p>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#41A4FF] focus:ring-1 focus:ring-[#41A4FF] outline-none transition"
            />
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#41A4FF] focus:ring-1 focus:ring-[#41A4FF] outline-none transition"
            />
            <textarea
              rows="4"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#41A4FF] focus:ring-1 focus:ring-[#41A4FF] outline-none transition"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-[#41A4FF] hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition shadow-md"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Info / FAQ Section */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-[#41A4FF] mb-2">Useful Info</h2>

          <div>
            <h3 className="font-semibold mb-2 text-lg">Popular Destinations</h3>
            <p className="text-gray-600">
              Explore Cox's Bazar, Sundarbans, Sylhet tea gardens, Rangamati &
              Bandarban. Enjoy nature, wildlife, and local culture with ease.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2 text-lg">Booking & Payment</h3>
            <p className="text-gray-600">
              Book hotels, tours, and vehicles with trusted local partners.
              Payment methods include card, bKash, Rocket, and bank transfers.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2 text-lg">Travel Safety</h3>
            <p className="text-gray-600">
              Bangladesh is generally safe for tourists. Follow local advice,
              keep emergency contacts handy, and enjoy your trip responsibly.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
