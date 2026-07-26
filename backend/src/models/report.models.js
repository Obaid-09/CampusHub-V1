import mongoose, { Schema } from "mongoose";

const reportSchema = new Schema(
  {
    resource: {
      type: Schema.Types.ObjectId,
      ref: "Resource",
      required: true,
    },

    reportedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    reason: {
      type: String,
      enum: [
        "Spam",
        "Copyright",
        "Wrong Subject",
        "Duplicate",
        "Low Quality",
        "Other",
      ],
      required: true,
    },

    description: {
      type: String,
      trim: true,
      default: "",
    },

    status: {
      type: String,
      enum: ["pending", "resolved", "dismissed"],
      default: "pending",
    },

    reviewedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },

    reviewedAt: {
      type: Date,
      default: null,
    },

    adminNotes: {
      type: String,
      trim: true,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

export const Report = mongoose.model("Report", reportSchema);
