const hotelReservation = require("../models/hotelReservationModel");
const Room = require("../models/Room");
//  const reservation = async (req, res, next) => {
//   try {
//     const {
//       hotelId,
//       hotelName,
//       phone,
//       checkInDate,
//       checkOutDate,
//       userName,
//       totalPrice,
//       totalDays,
//       roomIds, 
//     } = req.body;

//     const newReservation = new hotelReservation({
//       hotelId,
//       hotelName,
//       phone,
//       checkInDate,
//       checkOutDate,
//       userName,
//       totalPrice,
//       totalDays,
//       roomIds,
//     });

//     const savedReservation = await newReservation.save();
//     res.status(200).json(savedReservation);
//   } catch (err) {
//     next(err);
//   }
// };



const getDatesInRange = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = new Date(endDate);

  let date = new Date(start);
  const dates = [];

  while (date <= end) {
    dates.push(new Date(date).getTime());
    date.setDate(date.getDate() + 1);
  }

  return dates;
};
const reservation = async (req, res, next) => {
  try {
    const {
      hotelId,
      roomIds,
      hotelName,
      phone,
      checkInDate,
      checkOutDate,
      userName,
      totalPrice,
      totalDays,
    } = req.body;

    const newReservation = new hotelReservation({
      hotelId,
      roomIds,
      hotelName,
      phone,
      checkInDate,
      checkOutDate,
      userName,
      totalPrice,
      totalDays,
    });

    const allDates = getDatesInRange(checkInDate, checkOutDate);

    
    await Promise.all(
      roomIds.map(async (roomId) => {
        await Room.updateOne(
          { "roomNumbers._id": roomId },
          {
            $push: {
              "roomNumbers.$.unavailableDates": { $each: allDates },
            },
          }
        );
      })
    );

    const savedReservation = await newReservation.save();
    res.status(200).json(savedReservation);
  } catch (err) {
    next(err);
  }
};



const getAllReservation = async (req, res, next) => {
    
    try {
      const hotels = await hotelReservation.find({
      }).limit(req.query.limit);
      res.status(200).json(hotels);
    } catch (err) {
      res.status(500).json(err);
    }
  };


 const getUserReservation = async (req, res, next) => {
  try {
    // const { userName } = req.body;
 const { userName } = req.query;
    if (!userName) {
      return res.status(400).json({ message: "userName is required" });
    }

    // শুধুমাত্র userName এর data filter করা
    const hotels = await hotelReservation.find({ userName });

    res.status(200).json(hotels);
  } catch (err) {
    res.status(500).json(err);
  }
};
// const deleteReservation = async (req, res, next) => {
//   const { id } = req.params; // /hotelreservation/:id

//   try {
//     const deleted = await hotelReservation.findByIdAndDelete(id);
//     if (!deleted) return res.status(404).json({ message: "Reservation not found" });
//     res.status(200).json({ message: "Reservation deleted successfully" });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// };


/// ➤ Delete Reservation
const deleteReservation = async (req, res, next) => {
  const { id } = req.params;

  try {
    const reservation = await hotelReservation.findById(id);
    if (!reservation) return res.status(404).json({ message: "Reservation not found" });

    const allDates = getDatesInRange(reservation.checkInDate, reservation.checkOutDate);

    
    await Promise.all(
      reservation.roomIds.map(async (roomId) => {
        await Room.updateOne(
          { "roomNumbers._id": roomId },
          {
            $pull: {
              "roomNumbers.$.unavailableDates": { $in: allDates },
            },
          }
        );
      })
    );

    await reservation.deleteOne();
    res.status(200).json({ message: "Reservation deleted & room dates freed" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};




module.exports = {
    reservation,
    getAllReservation,
    deleteReservation,
    getUserReservation
  };