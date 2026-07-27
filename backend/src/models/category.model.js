import mongoose, { Schema } from "mongoose";

const categorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    type: {
      type: String,
      enum: ["branch", "subject", "resourceType"],
      required: true,
    },

    isActive: {
      type: Boolean,
      default: true,
    },

    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Prevent duplicate categories of the same type
categorySchema.index(
  {
    name: 1,
    type: 1,
  },
  {
    unique: true,
  }
);

export const Category = mongoose.model("Category", categorySchema);
