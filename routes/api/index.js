const router = require("express").Router();
const workout = require("./workouts");

router.use("/workouts", workout);

module.exports = router;
