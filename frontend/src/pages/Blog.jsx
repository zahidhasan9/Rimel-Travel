import React, { useState, useEffect } from "react";

const BlogPage = () => {
  // ====== Blog Data ======
  // const blogs = [
  //   {
  //     id: 1,
  //     title: "Exploring the Beauty of Cox’s Bazar 🌊",
  //     image:
  //       "https://images.unsplash.com/photo-1594993877167-a08f13013dc3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
  //     description:
  //       "Discover the world’s longest sea beach — from sunrise walks to seafood feasts, here’s why Cox’s Bazar is a must-visit destination.",
  //     content: `
  //     Cox’s Bazar isn’t just the longest sea beach in the world — it’s a place that captures the soul of Bangladesh’s coastal life. 
  //     The sound of waves, the golden sand, and the smell of fresh seafood make it a paradise for travelers.

  //     From early morning boat rides to sunset beach volleyball, every moment here is filled with joy. 
  //     You’ll also find Buddhist temples, tribal markets, and scenic hills that add color to the experience.

  //     Whether you’re a solo traveler, a couple, or a family — Cox’s Bazar welcomes everyone with open arms and unforgettable memories.
  //     `,
  //     date: "October 10, 2025",
  //     author: "Travel Bangladesh",
  //   },
  //   {
  //     id: 2,
  //     title: "Discovering the Tea Gardens of Sylhet 🍃",
  //     image:
  //       "https://images.unsplash.com/photo-1627895457805-c7bf42cb9873?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  //     description:
  //       "Sylhet is a land of green — tea gardens, waterfalls, and mountains make it one of the most beautiful regions of Bangladesh.",
  //     content: `
  //     Sylhet’s rolling tea estates and crystal-clear waterfalls make it one of the most picturesque places in Bangladesh. 
  //     Tourists love to explore the green tea valleys, take a boat ride on Lalakhal, and enjoy the local hospitality.

  //     Jaflong, Ratargul Swamp Forest, and Bichanakandi are some of the must-see spots for nature lovers.
  //     `,
  //     date: "October 8, 2025",
  //     author: "Green Escape",
  //   },
  //   {
  //     id: 3,
  //     title: "The Ancient Heritage of Paharpur 🏛️",
  //     image:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE5Yn5-jtXZVfBRITS-UHB7-hO6kraFLdsb8f37gsyR1CHT5qU2Dj4z7BgcxISaObMBYU&usqp=CAU",
  //     description:
  //       "Step into history at the ancient ruins of Paharpur — a UNESCO World Heritage site reflecting the glory of ancient Bengal.",
  //     content: `
  //     Paharpur’s Somapura Mahavihara is one of the most important archaeological sites in South Asia. 
  //     It was once a great Buddhist monastery that attracted scholars from all over the world.

  //     The vast ruins, intricate terracotta designs, and spiritual ambiance make it a fascinating destination for history lovers.
  //     `,
  //     date: "October 5, 2025",
  //     author: "Heritage Explorer",
  //   },
  //   {
  //   id: 4,
  //   title: "Exploring the Beauty of Cox’s Bazar 🌊",
  //   image: "...",
  //   description: "...",
  //   content: "...",
  //   date: "October 10, 2025",
  //   author: "Travel Bangladesh",

  //   // ➤ New: YouTube Videos
  //   videoLinks: [
  //     "https://www.youtube.com/watch?v=K1QICrgxTjA",
  //     "https://www.youtube.com/watch?v=z2X2HaTvkl8"
  //   ]
  // },
  // ];

  const blogs = [
  {
    id: 1,
    title: "Exploring the Beauty of Cox’s Bazar 🌊",
    image:
      "https://images.unsplash.com/photo-1594993877167-a08f13013dc3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
    description:
      "Discover the world’s longest sea beach — from sunrise walks to seafood feasts, here’s why Cox’s Bazar is a must-visit destination.",
    content: `
      Cox’s Bazar isn’t just the longest sea beach in the world — it’s a place that captures the soul of Bangladesh’s coastal life. 
      The sound of waves, the golden sand, and the smell of fresh seafood make it a paradise for travelers.

      From early morning boat rides to sunset beach volleyball, every moment here is filled with joy. 
      You’ll also find Buddhist temples, tribal markets, and scenic hills that add color to the experience.

      Whether you’re a solo traveler, a couple, or a family — Cox’s Bazar welcomes everyone with open arms and unforgettable memories.
    `,
    date: "October 10, 2025",
    author: "Travel Bangladesh",

    videoLinks: [
  "https://www.youtube.com/watch?v=zCSmY_WjvPs", // Sylhet long travel vlog
  "https://www.youtube.com/watch?v=YPxfs_hYOnw", // Ratargul Swamp Forest
 
]



  },

  {
    id: 2,
    title: "Discovering the Tea Gardens of Sylhet 🍃",
    image:
      "https://images.unsplash.com/photo-1627895457805-c7bf42cb9873?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    description:
      "Sylhet is a land of green — tea gardens, waterfalls, and mountains make it one of the most beautiful regions of Bangladesh.",
    content: `
      Sylhet’s rolling tea estates and crystal-clear waterfalls make it one of the most picturesque places in Bangladesh. 
      Tourists love to explore the green tea valleys, take a boat ride on Lalakhal, and enjoy the local hospitality.

      Jaflong, Ratargul Swamp Forest, and Bichanakandi are some of the must-see spots for nature lovers.
    `,
    date: "October 8, 2025",
    author: "Green Escape",

    videoLinks: [
      "https://www.youtube.com/watch?v=1LWDqve_Atc", // Sylhet travel vlog
      "https://www.youtube.com/watch?v=RYKlri-etso", // Ratargul drone view
      
    ]
  },

  {
    id: 3,
    title: "The Ancient Heritage of Paharpur 🏛️",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE5Yn5-jtXZVfBRITS-UHB7-hO6kraFLdsb8f37gsyR1CHT5qU2Dj4z7BgcxISaObMBYU&usqp=CAU",
    description:
      "Step into history at the ancient ruins of Paharpur — a UNESCO World Heritage site reflecting the glory of ancient Bengal.",
    content: `
      Paharpur’s Somapura Mahavihara is one of the most important archaeological sites in South Asia. 
      It was once a great Buddhist monastery that attracted scholars from all over the world.

      The vast ruins, intricate terracotta designs, and spiritual ambiance make it a fascinating destination for history lovers.
    `,
    date: "October 5, 2025",
    author: "Heritage Explorer",

    videoLinks: [
      "https://www.youtube.com/watch?v=PnvVMoHhQRw", // Paharpur documentary
      "https://www.youtube.com/watch?v=kVbVzPyHWq8", // Paharpur history vlog
     
    ]
  },


];


  // ====== State ======
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  // ====== Load Reviews ======
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("travel_blog_reviews")) || [];
    setReviews(saved);
  }, []);

  // ====== Save Review ======
  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) return alert("Please fill in all fields!");

    const newReview = {
      id: Date.now(),
      blogId: selectedBlog.id,
      name,
      comment,
      date: new Date().toLocaleString(),
    };

    const updated = [newReview, ...reviews];
    setReviews(updated);
    localStorage.setItem("travel_blog_reviews", JSON.stringify(updated));
    setName("");
    setComment("");
  };

  // ====== Filter Reviews for Selected Blog ======
  const filteredReviews = reviews.filter((r) => r.blogId === selectedBlog?.id);

  // ====== Go Back to List ======
  const handleBack = () => setSelectedBlog(null);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* ====== Header ====== */}
      <section className="bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 text-white py-16 text-center shadow-md">
        <h1 className="text-4xl md:text-5xl font-bold">Our Travel Blog ✈️</h1>
        <p className="mt-3 text-lg opacity-90">
          Explore beautiful destinations and share your own experiences
        </p>
      </section>

      {/* ====== Blog List ====== */}
      {!selectedBlog && (
        <div className="max-w-6xl mx-auto px-6 md:px-0 py-16 grid md:grid-cols-3 gap-10">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all cursor-pointer group"
              onClick={() => setSelectedBlog(blog)}
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="h-56 w-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  {blog.title}
                </h3>
                <p className="text-gray-600 mb-4">{blog.description}</p>
                <p className="text-sm text-gray-400">{blog.date}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ====== Single Blog ====== */}
      {selectedBlog && (
        <div className="max-w-4xl mx-auto px-6 md:px-0 py-16">
          <button
            onClick={handleBack}
            className="mb-6 bg-gray-200 px-5 py-2 rounded-lg hover:bg-gray-300"
          >
            ← Back to Blogs
          </button>
          <img
            src={selectedBlog.image}
            alt={selectedBlog.title}
            className="rounded-3xl mb-10 shadow-xl w-full object-cover h-[400px]"
          />
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            {selectedBlog.title}
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            By {selectedBlog.author} — {selectedBlog.date}
          </p>
          <p className="text-lg leading-relaxed whitespace-pre-line mb-10">
            {selectedBlog.content}
          </p>

{/* ====== Video Section ====== */}
{selectedBlog.videoLinks && selectedBlog.videoLinks.length > 0 && (
  <section className="mb-14">
    <h3 className="text-2xl font-bold mb-6 text-gray-900">
      Watch Related Videos 🎬
    </h3>

    <div className="grid md:grid-cols-2 gap-8">
      {selectedBlog.videoLinks.map((link, index) => {
        const embedUrl = link.replace("watch?v=", "embed/");
        return (
          <div
            key={index}
            className="w-full aspect-video rounded-xl overflow-hidden shadow-lg"
          >
            <iframe
              src={embedUrl}
              title={`YouTube video ${index}`}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        );
      })}
    </div>
  </section>
)}


          {/* ====== Review Section ====== */}
          <section>
            <h3 className="text-2xl font-bold mb-6 text-gray-900">
              Share Your Experience 💬
            </h3>
            <form
              onSubmit={handleReviewSubmit}
              className="bg-white p-6 md:p-8 rounded-2xl shadow-lg mb-10"
            >
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <textarea
                placeholder="Write your review..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 h-32 focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4 resize-none"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Submit Review
              </button>
            </form>

            {/* Show Reviews */}
            <div className="space-y-6">
              {filteredReviews.length === 0 ? (
                <p className="text-gray-500 text-center">
                  No reviews yet. Be the first to share your experience!
                </p>
              ) : (
                filteredReviews.map((r) => (
                  <div
                    key={r.id}
                    className="bg-white rounded-2xl shadow-md p-6 border border-gray-100"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-bold text-gray-800">{r.name}</h4>
                      <span className="text-sm text-gray-500">{r.date}</span>
                    </div>
                    <p className="text-gray-700">{r.comment}</p>
                  </div>
                ))
              )}
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default BlogPage;
