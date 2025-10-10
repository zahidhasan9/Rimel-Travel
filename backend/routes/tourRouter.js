// const express = require("express");
// const tourController = require("../controllers/tourController");
// const tourCustomForm = require("../controllers/tourCustomFormController");
// const tourReservation = require("../controllers/tourReservstionController");

// //define route handler
// const router = express.Router();

// //tour routes
// router
//   .route("/")
//   .post(tourController.createTour)
//   .get(tourController.getAllTours);

// router
//   .route("/:id")
//   .get(tourController.getTour)
//   .patch(tourController.updateTour)
//   .delete(tourController.deleteTour);

// //custom form
// router.route("/customform").post(tourCustomForm.createForm);

// // router.route("/tt").post(tourReservation.getAllReservations);
// //reserve form
// // router
// //   .route("/tourReservations")
// //   .get(tourReservation.getAllReservations)
// //   .post(tourReservation.bookTour);

// // GET route - Get all tour reservations
// router.get("/tourReservations", tourReservation.getAllReservations);


// // POST route - Book a new tour
// router.post("/tourReservations", tourReservation.bookTour);


// module.exports = router;


const express = require("express");
const tourController = require("../controllers/tourController");
const tourCustomForm = require("../controllers/tourCustomFormController");
const tourReservation = require("../controllers/tourReservstionController");
const router = express.Router();

// --- Tour Reservations Routes ---
// GET all reservations
router.get("/tourReservations", tourReservation.getAllReservations);
router.get("/touruserReservations", tourReservation.getUserReservations);
// POST a new reservation
router.post("/tourReservations", tourReservation.bookTour);
router.delete("/tourReservations/:id", tourReservation.deleteReservation);

// --- Custom Form ---
router.route("/customform").post(tourCustomForm.createForm);

// --- Tour Routes ---
router
  .route("/")
  .post(tourController.createTour)
  .get(tourController.getAllTours);

// Specific tour by ID
router
  .route("/:id")
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = router;
