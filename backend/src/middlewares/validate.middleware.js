import { validationResult } from "express-validator";
import { ApiError } from "../utils/ApiError.js";

// export const validate = (req, res, next) => {

//     const errors = validationResult(req);

//     if (!errors.isEmpty()) {
//         throw new ApiError(
//             400,
//             errors.array()[0].msg
//         );
//     }

//     next();
// };

export const validate = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    console.log(errors.array()); // <-- add this

    return res.status(400).json({
      success: false,
      errors: errors.array(),
    });
  }

  next();
};
