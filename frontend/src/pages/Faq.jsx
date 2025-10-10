import React, { useState, useEffect } from "react";

const FAQ = () => {
  // Default FAQ
  const defaultFaqs = [
    {
      id: 1,
      question: "How can I book a tour package?",
      answer:
        "You can book a tour package directly from our website by selecting your destination and preferred date, then clicking on 'Book Now'.",
    },
    {
      id: 2,
      question: "Do you offer group discounts?",
      answer:
        "Yes! We offer discounts for groups of 5 or more travelers. Please contact our support team for details.",
    },
    {
      id: 3,
      question: "Can I cancel or change my booking?",
      answer:
        "Yes, you can modify or cancel your booking up to 48 hours before your scheduled trip.",
    },
  ];

  const [faqs, setFaqs] = useState([]);
  const [question, setQuestion] = useState("");

  // Load saved questions from localStorage
  useEffect(() => {
    const savedFaqs = JSON.parse(localStorage.getItem("travel_faqs")) || [];
    setFaqs([...defaultFaqs, ...savedFaqs]);
  }, []);

  // Handle new question submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!question.trim()) return alert("Please enter your question!");

    const newFaq = {
      id: Date.now(),
      question,
      answer: "Thank you! Our team will review and answer soon.",
    };

    const updatedFaqs = [...faqs, newFaq];
    setFaqs(updatedFaqs);
    localStorage.setItem(
      "travel_faqs",
      JSON.stringify(updatedFaqs.filter((f) => !defaultFaqs.some((d) => d.id === f.id)))
    );

    setQuestion("");
  };

  // Toggle Answer
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleFAQ = (index) =>
    setActiveIndex(activeIndex === index ? null : index);

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-100 py-16 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-12">
        <h1 className="text-4xl font-extrabold text-center text-blue-700 mb-10">
          Frequently Asked Questions ❓
        </h1>

        {/* FAQ List */}
        <div className="space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className="border border-gray-200 rounded-2xl shadow-sm transition-all bg-white"
            >
              <button
                className="w-full flex justify-between items-center p-5 text-left text-lg font-semibold text-gray-800 hover:bg-blue-50 rounded-2xl transition"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span className="text-blue-500 text-2xl">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>
              {activeIndex === index && (
                <div className="px-5 pb-5 text-gray-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>

        {/* Add New Question */}
        <div className="bg-blue-50 p-6 rounded-2xl">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">
            Have a Question? Ask Here 💬
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <textarea
              placeholder="Type your question..."
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 h-28 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 self-start"
            >
              Submit Question
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
