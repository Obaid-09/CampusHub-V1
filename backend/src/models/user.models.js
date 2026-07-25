import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";



const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    fullname: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    avatar: {
      type: String,
      required: true,
    },
    recentlyViewed: [
        {
            resource: {
                type: Schema.Types.ObjectId,
                ref: "Resource",
                // ref: "User"
            },
            viewedAt: {
                type: Date,
                default: Date.now,
            },
        },
    ],
    viewedResources: [
        {
            type: Schema.Types.ObjectId,
            ref: "Resource",
        },
    ],
    bookmarks: [
        {
            resource: {
                type: Schema.Types.ObjectId,
                ref: "Resource",
                //ref: "User"
            },
            bookmarkedAt: {
                type: Date,
                default: Date.now,
            },
        },
    ],
    downloads: [
        {
            resource: {
                type: Schema.Types.ObjectId,
                ref: "Resource",
            },
            downloadedAt: {
                type: Date,
                default: Date.now,
            },
        },
    ],
    // uploadedResources:[
    //     {
    //         type:Schema.Types.ObjectId,
    //         ref:"Resource",
    //         //ref: "User"
    //     }
    // ],
    role:{
        type:String,
        enum:["student","admin"],
        default:"student"
    },
    branch:{
        type:String,
        enum:[
            "CSE",
            "ECE",
            "EEE",
            "ME",
            "CE",
            "CHE",
            "MME",
            "BT",
            "Other"
        ]
    },
    year:{
        type:Number,
        min:1,
        max:4
    },
    semester:{
        type:Number,
        min:1,
        max:8
    },
    college:{
        type:String,
        default:"NIT Warangal"
    },
    bio:{
        type:String,
        trim:true,
        maxlength:300
    },
    isVerified:{
        type:Boolean,
        default:false
    },
    lastLogin:{
        type:Date
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    refreshToken: {
      type: String,
    },
  },
  { timestamps: true }
);


userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next;

  this.password = await bcrypt.hash(this.password, 10);
  next;
});


userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password)
}


userSchema.methods.generateAccessToken = function () {
        return jwt.sign({
            _id: this._id,
            email: this.email,
            username: this.username,
            fullname: this.fullname,
            role: this.role
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}
userSchema.methods.generateRefreshToken = function () {
        return jwt.sign({
            _id: this._id,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

export const User = mongoose.model("User", userSchema);
