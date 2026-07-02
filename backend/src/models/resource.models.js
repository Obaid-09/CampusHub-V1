import mongoose, { Schema } from "mongoose";

const resourceSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },

    description: {
      type: String,
      trim: true,
      default: "",
    },

    type: {
      type: String,
      required: true,
      enum: [
        "Notes",
        "PYQ",
        "Assignment",
        "Lab Manual",
        "Book",
        "Presentation",
        "Cheat Sheet",
        "Other",
      ],
      index: true,
    },

    subject: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },

    courseCode: {
      type: String,
      trim: true,
      uppercase: true,
      default: "",
    },

    branch: {
      type: String,
      required: true,
      enum: [
        "CSE",
        "ECE",
        "EEE",
        "ME",
        "CE",
        "CHE",
        "MME",
        "BT",
        "Other",
      ],
      index: true,
    },

    semester: {
      type: Number,
      required: true,
      min: 1,
      max: 8,
      index: true,
    },

    year: {
      type: Number,
      required: true,
      min: 1,
      max: 4,
    },

    academicYear: {
        type: String,
        default: "",
    },

    college: {
        type: String,
        default: "NIT Warangal",
        index: true,
    },

    examType: {
        type: String,
        enum: ["Mid Sem", "End Sem", "Quiz", "Assignment", "Other"],
        default: "Other",
    },

    tags: [
      {
        type: String,
        trim: true,
      },
    ],

    pdfUrl: {
      type: String,
      required: true,
      unique: true
    },

    pdfPublicId: {
      type: String,
      required: true,
      unique: true
    },

    pdfOriginalName: {
        type: String,
        default: "",
    },

    thumbnail: {
      type: String,
      default: null,
    },

    thumbnailPublicId: {
      type: String,
      default: null,
    },

    fileSize: {
      type: Number,
      default: 0,
    },

    totalPages: {
      type: Number,
      default: 0,
    },

    uploadedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },

    pdfOriginalName: {
        type: String,
    },

    downloads: {
      type: Number,
      default: 0,
    },

    views: {
      type: Number,
      default: 0,
    },

    bookmarks: {
      type: Number,
      default: 0,
    },

    averageRating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },

    ratingsCount: {
      type: Number,
      default: 0,
    },

    visibility: {
      type: String,
      enum: ["public", "private"],
      default: "public",
    },

    status: {
      type: String,
      enum: [
        "pending",
        "approved",
        "rejected",
      ],
      default: "approved",
      index: true,
    },

    isVerified: {
      type: Boolean,
      default: false,
    },

    isDeleted: {
        type: Boolean,
        default: false,
        index: true
    },
  },
  {
    timestamps: true,
  }
);

resourceSchema.index({
    title: "text",
    description: "text",
    subject: "text",
    tags: "text"
});

resourceSchema.index({
    branch:1,
    semester:1,
    type:1
});

// resourceSchema.index({
//     uploadedBy:1
// });

resourceSchema.index({
    downloads:-1
});

resourceSchema.index({
    status:1,
    visibility:1
});


export const Resource = mongoose.model("Resource", resourceSchema);