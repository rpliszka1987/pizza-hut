const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const PizzaSchema = new Schema(
  {
    pizzaName: {
      type: String,
      required: true,
      trim: true,
    },
    createdBy: {
      type: String,
      required: true,
      trim: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      //   Converts data format with a getter
      get: (createdAtVal) => dateFormat(createdAtVal),
    },
    size: {
      type: String,
      required: true,
      enum: ["Personal", "Small", "Medium", "Large", "Extra Large"],
      default: "Large",
    },
    toppings: [],
    //   Adding comments model.
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
  },
  {
    // Add virtuals to the model
    toJSON: {
      virtuals: true,
      getters: true,
    },
    // Dont need id
    id: false,
  }
);
// get total count of comments and repliees on retrieval
PizzaSchema.virtual("commentCount").get(function () {
  return this.comments.reduce(
    (total, comment) => total + comment.replies.length + 1,
    0
  );
});

// create the Pizza model using the PizzaSchema
const Pizza = model("Pizza", PizzaSchema);

// export the Pizza model
module.exports = Pizza;
