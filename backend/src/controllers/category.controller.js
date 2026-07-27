import { Category } from "../models/category.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const getCategories = asyncHandler(async (req, res) => {
  const { type } = req.query;

  const filter = {
    isActive: true,
  };

  if (type) {
    filter.type = type;
  }

  const categories = await Category.find(filter)
    .sort({
      name: 1,
    })
    .select("name type");

  return res
    .status(200)
    .json(new ApiResponse(200, categories, "Categories fetched successfully."));
});

export { getCategories };
