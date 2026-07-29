import { useState } from "react";

import { Bookmark } from "lucide-react";

import Button from "../ui/Button";

import { resourceAPI } from "../../api/resource.api";
import { errorToast, successToast } from "../../utils/toast";

const BookmarkButton = ({ resourceId, initiallyBookmarked = false }) => {
  const [bookmarked, setBookmarked] = useState(initiallyBookmarked);

  const handleBookmark = async () => {
    const previous = bookmarked;
    setBookmarked(!previous);

    try {
      const response = await resourceAPI.bookmarkResource(resourceId);

      setBookmarked(response.data.data.bookmarked);
      successToast("Resource Bookmarked successfully");
    } catch (error) {
      setBookmarked(previous);

      errorToast(error.response?.data?.message || "Failed to update bookmark.");
    }
  };

  return (
    <Button
      variant="outline"
      onClick={handleBookmark}
      className="
                w-full
                flex
                justify-center
                items-center
                gap-2
            "
    >
      <Bookmark size={18} fill={bookmarked ? "currentColor" : "none"} />

      {bookmarked ? "Bookmarked" : "Bookmark"}
    </Button>
  );
};

export default BookmarkButton;
