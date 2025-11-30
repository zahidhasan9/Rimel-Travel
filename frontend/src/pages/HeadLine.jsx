import React, { useState, useEffect } from "react";

const AddHeadlinePage = () => {
  const [headline, setHeadline] = useState("");
  const [allHeadlines, setAllHeadlines] = useState([]);

  // Load From LocalStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("headlines")) || [];
    setAllHeadlines(saved);
  }, []);

  // Save To LocalStorage
  const saveToLocalStorage = (updated) => {
    localStorage.setItem("headlines", JSON.stringify(updated));
  };

  // Add Headline
  const addHeadline = () => {
    if (!headline.trim()) return;

    const updated = [...allHeadlines, headline];
    setAllHeadlines(updated);
    saveToLocalStorage(updated);
    setHeadline("");
  };

  // Remove Headline
  const removeHeadline = (index) => {
    const updated = allHeadlines.filter((_, i) => i !== index);
    setAllHeadlines(updated);
    saveToLocalStorage(updated);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
        Headline Manager 📰
      </h1>

      {/* Input Box */}
      <div className="bg-white shadow-xl p-5 rounded-xl border">
        <label className="block font-semibold mb-2">Add Headline</label>
        <input
          type="text"
          value={headline}
          onChange={(e) => setHeadline(e.target.value)}
          placeholder="Enter headline..."
          className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={addHeadline}
          className="mt-3 w-full py-2 rounded-xl bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold shadow hover:from-blue-600 hover:to-blue-800 transition duration-300"
        >
          Add Headline
        </button>
      </div>

      {/* Output Section */}
      <h2 className="text-2xl font-semibold mt-8 mb-3 text-gray-700">
        All Headlines
      </h2>

      {allHeadlines.length === 0 ? (
        <p className="text-gray-500">No headlines added yet...</p>
      ) : (
        <div className="space-y-3">
          {allHeadlines.map((text, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-white border rounded-xl p-3 shadow"
            >
              <p className="font-medium text-gray-700">{text}</p>

              <button
                onClick={() => removeHeadline(index)}
                className="px-4 py-1 rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AddHeadlinePage;
