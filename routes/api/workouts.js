const router = require("express").Router();
const Workout = require("../../models/workoutModel");

router.post("/", ({ body }, res) => {
  Workout.create(body)
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// router.post("/bulk", ({ body }, res) => {
//   Workout.insertMany(body)
//     .then((dbWorkout) => {
//       res.json(dbWorkout);
//     })
//     .catch((err) => {
//       res.status(400).json(err);
//     });
// });
router.get("/range", (req, res) => {
  Workout.find({})
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.put("/:id", async ({ body }, res) => {
  try {
    const dbWorkout = await Workout.find(body);
    console.log(dbWorkout);
    res.json(dbWorkout);
  } catch (err) {
    console.log(err);
  }
});

router.get("/", (req, res) => {
  Workout.find({})
    // .sort({ date: -1 })
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
