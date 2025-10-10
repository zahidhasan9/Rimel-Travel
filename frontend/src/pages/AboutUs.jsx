import React from "react";

const AboutUs = () => {
  return (
    <div className="text-gray-800">
      {/* ====== Hero Section ====== */}
      <section className="bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 text-white py-20 px-6 md:px-24 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
          About <span className="text-yellow-300">TravelEase</span>
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl opacity-90">
          We’re passionate about helping travelers explore Bangladesh and beyond — 
          with comfort, confidence, and unforgettable experiences.
        </p>
      </section>

      {/* ====== Company Story ====== */}
      <section className="py-20 px-6 md:px-24 bg-gray-50">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Our Story
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              Founded in 2020, <b>TravelEase</b> began with a simple vision — 
              to make travel in Bangladesh easy, reliable, and full of adventure. 
              From the serene beaches of Cox’s Bazar to the green hills of Bandarban, 
              we curate experiences that bring travelers closer to the heart of nature and culture.
            </p>
            <p className="text-lg leading-relaxed">
              Over the years, we’ve grown into one of Bangladesh’s most trusted 
              travel brands, combining technology, local expertise, and a passion 
              for exploration to create journeys that inspire.
            </p>
          </div>
          <img
            src="https://images.squarespace-cdn.com/content/v1/5b0eb59df793928fa7f488ff/1536780543743-TZT0SJMRKV5LUOOY8FS0/Industryyyy.jpg?format=1000w"
            alt="Travel Story"
            className="rounded-3xl shadow-xl object-cover w-full h-[400px]"
          />
        </div>
      </section>

      {/* ====== Mission & Vision ====== */}
      <section className="py-20 px-6 md:px-24 bg-white">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-gradient-to-br from-sky-100 to-sky-200 p-8 rounded-3xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-sky-700">Our Mission</h3>
            <p className="text-lg leading-relaxed text-gray-700">
              To make every journey memorable through trusted service, 
              sustainable travel experiences, and exceptional hospitality — 
              connecting people with the beauty of Bangladesh.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-8 rounded-3xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-blue-700">Our Vision</h3>
            <p className="text-lg leading-relaxed text-gray-700">
              To become Bangladesh’s leading travel agency recognized globally 
              for innovation, integrity, and outstanding customer experience.
            </p>
          </div>
        </div>
      </section>

      {/* ====== Team Section ====== */}
      <section className="py-20 px-6 md:px-24 bg-gray-50 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-900">
          Meet Our Team
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">
          {[
            {
              name: "Karim ali",
              role: "Founder & CEO",
              img: "https://randomuser.me/api/portraits/men/75.jpg",
            },
            {
              name: "Rafi Rahman",
              role: "Tour Manager",
              img: "https://randomuser.me/api/portraits/men/32.jpg",
            },
            {
              name: "Anika Chowdhury",
              role: "Travel Consultant",
              img: "https://randomuser.me/api/portraits/women/44.jpg",
            },
            {
              name: "Sabbir Ahmed",
              role: "Marketing Lead",
              img: "https://randomuser.me/api/portraits/men/41.jpg",
            },
          ].map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
              />
              <h4 className="text-xl font-bold text-gray-800">{member.name}</h4>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ====== CTA Section ====== */}
      <section className="bg-gradient-to-r from-blue-500 via-sky-500 to-cyan-400 text-white py-20 px-6 md:px-24 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Ready to Explore Bangladesh?
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Whether it’s a solo trip or a family getaway, we’ll help you design the perfect itinerary.
        </p>
        <button className="bg-white text-blue-600 font-semibold px-10 py-4 rounded-xl shadow-lg hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300">
          Plan Your Trip Now
        </button>
      </section>
    </div>
  );
};

export default AboutUs;
