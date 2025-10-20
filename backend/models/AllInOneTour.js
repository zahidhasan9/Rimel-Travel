// models/Tour.js
const mongoose = require("mongoose");

const tourSchema = new mongoose.Schema(
  {
    
    name: { type: String, required: true, trim: true },
    groupCount: { type: Number, required: true, min: 1 },
    languages: { type: String, required: true }, // comma separated or array later
    duration: { type: Number, required: true, min: 1 },
    cities: { type: String, required: true }, // could be array if desired
    description: { type: String, required: true },
    introduction: { type: String, required: true },
    // new fields
    hotelName: { type: String, required: true },
    hotelLocation: { type: String, required: true },
    vehicleBrand: { type: String, required: true },
    vehicleModel: { type: String, required: true },
    totalPrice: { type: Number, required: true, min: 0 },

    // optional fields for future (images, category etc.)
    

    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("AllInOneTour", tourSchema);
