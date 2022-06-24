const { Schema, model } = require("mongoose");

const PizzaSchema = new Schema(
  {
    pizzaName: {
      type: String,
    },
    createdBy: {
      type: String,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    size: {
      type: String,
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
    },
    // Dont need id
    id: false,
  }
);
// get total count of comments and repliees on retrieval
PizzaSchema.virtual("commentCount").get(function () {
  return this.comments.length;
});

// create the Pizza model using the PizzaSchema
const Pizza = model("Pizza", PizzaSchema);

// export the Pizza model
module.exports = Pizza;
