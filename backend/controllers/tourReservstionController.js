const tourReserve = require("../models/tourBook");

const bookTour = async (req, res) => {
  try {
    console.log("ava");
    const newRes = new tourReserve(req.body);
    console.log(newRes);
    const saveRes = await newRes.save();

    res.status(200).json({
      status: "Success",
      message:
        "Your have SuccessFully booked this tour, One of our Agent will contact you!",
      data: {
        book: saveRes,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "Unsuccess",
      message: "Error Booking Tour",
    });
  }
};

// const getAllReservations = async (req, res) => {
//   try {
//     const allReservations = await tourReserve.find();
//     res.status(200).send(allReservations);
//   } catch (err) {
//     console.log();
//     res.status(404).json({
//       status: "unsuccess",
//       message: "err.message",
//     });
//   }
// };

const getAllReservations = async (req, res) => {
  try {
    const allReservations = await tourReserve.find();
    
    res.status(200).json({
      status: "success",
      data: allReservations,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      status: "unsuccess",
      message: err.message,
    });
  }
  console.log('tiomr');
};


const deleteReservation = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await tourReserve.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({
        status: "unsuccess",
        message: "Reservation not found",
      });
    }
    res.status(200).json({
      status: "success",
      message: "Reservation deleted successfully",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      status: "unsuccess",
      message: err.message,
    });
  }
};

module.exports = { bookTour, getAllReservations,deleteReservation };
