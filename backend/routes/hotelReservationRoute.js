const express=require("express");
const Hotel = require("../models/hotelReservationModel");
const {
    reservation, getAllReservation,deleteReservation,getUserReservation
  } = require("../controllers/hotelReservation.js");

  const router =express.Router();
  //Create
  router.post("/reservation",reservation)
  router.get("/userreservation",getUserReservation)
  router.get("/getAll",getAllReservation)
  router.delete("/:id", deleteReservation);


module.exports = router;
   