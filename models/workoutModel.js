const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: () => new Date(),
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Enter the type of exercise",
      },
      name: {
        type: String,
        trim: true,
        required: "Enter the name of the exercise",
      },

      duration: {
        type: Number,
        trim: true,
        required: "Enter the duration of the exercise",
      },

      weight: {
        type: Number,
      },

      reps: {
        type: Number,
      },

      sets: {
        type: Number,
      },

      distance: {
        type: Number,
      },
    },
  ],
  totalDuration: {
    type: Number,
    default: 0,
  },
});

const Workout = mongoose.model("Workout", WorkoutSchema);
module.exports = Workout;
