const express = require("express");
const bodyParser = require("body-parser");

const HttpError = require("../models/http-error");
const router = express.Router();

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    decription: "Mast famous sky scraper",
    location: {
      lat: 40.7484474,
      lng: -73.9871516,
    },
    address: "20 W 34th st, New York, NY 10001",
    creator: "u1",
  },
];

// router.get("/", (req, res, next) => {
//   console.log("Get Request in Places");
//   res.json({ message: "It is working" });
// }); //http://localhost:5000/api/places

router.get("/:pid", (req, res, next) => {
  const placeId = req.params.pid;
  const place = DUMMY_PLACES.find((p) => {
    return p.id === placeId;
  });

  //   if (!place) {
  //     return res
  //       .status(404)
  //       .json({ message: "couldnt find a place for provided id" });
  //   }

  //   if (!place) {
  //     const error = new Error("Could not find a place for the provided id");
  //     error.code = 404;
  //     throw error;
  //   }

  if (!place) {
    throw new HttpError("Could not find a place for the provided id", 404);
  }

  res.json({ place }); //=>{place}=>{place : place}if prop name is equal to name of variable.
});

router.get("/user/:uid", (req, res, next) => {
  const userId = req.params.uid;

  const place = DUMMY_PLACES.find((p) => {
    return p.creator === userId;
  });

  //   if (!place) {
  //     const error = new Error("Could not find a place for the provided user id");
  //     error.code = 404;
  //     return next(error);
  //   }

  if (!place) {
    return next(new HttpError("couldnot find place for provided user id", 404));
  }
  res.json({ place });
});

module.exports = router;
