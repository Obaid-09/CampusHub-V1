import mongoose, { Schema } from "mongoose";

const settingsSchema = new Schema(
  {
    platform: {
      allowRegistration: {
        type: Boolean,
        default: true,
      },

      resourceApproval: {
        type: Boolean,
        default: true,
      },

      enableReports: {
        type: Boolean,
        default: true,
      },

      enableEmailNotifications: {
        type: Boolean,
        default: true,
      },
    },

    upload: {
      maxUploadSize: {
        type: Number,
        default: 25,
      },

      uploadsPerDay: {
        type: Number,
        default: 10,
      },

      allowedTypes: {
        type: [String],
        default: ["pdf", "ppt", "pptx", "doc", "docx"],
      },
    },

    security: {
      passwordLength: {
        type: Number,
        default: 8,
      },

      loginAttempts: {
        type: Number,
        default: 5,
      },
    },
  },
  {
    timestamps: true,
  }
);

export const Settings = mongoose.model("Settings", settingsSchema);
