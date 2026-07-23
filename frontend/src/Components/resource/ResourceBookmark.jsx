import { useState } from "react";
import { Bookmark } from "lucide-react";

import Button from "../ui/Button";

import { resourceAPI } from "../../api/resource.api";
import { successToast, errorToast } from "../../utils/toast";

const ResourceBookmark = ({ resource, variant = "button" }) => {
  const [bookmarked, setBookmarked] = useState(resource?.isBookmarked || false);

  const [loading, setLoading] = useState(false);

  const handleBookmark = async (e) => {
    e?.stopPropagation();

    if (loading) return;

    const previous = bookmarked;

    setBookmarked(!previous);

    try {
      setLoading(true);

      const response = await resourceAPI.bookmarkResource(resource._id);

      setBookmarked(response.data.data.bookmarked);

      successToast(response.data.message);
    } catch (error) {
      setBookmarked(previous);

      errorToast(error.response?.data?.message || "Failed to update bookmark.");
    } finally {
      setLoading(false);
    }
  };

  if (variant === "icon") {
    return (
      <button
        onClick={handleBookmark}
        disabled={loading}
        className="
                    absolute
                    top-4
                    right-4
                    w-10
                    h-10
                    rounded-full
                    bg-white
                    shadow-lg
                    flex
                    items-center
                    justify-center
                    hover:bg-primary/10
                    transition-all
                    z-20
                "
      >
        <Bookmark
          size={18}
          fill={bookmarked ? "currentColor" : "none"}
          className={bookmarked ? "text-primary" : ""}
        />
      </button>
    );
  }

  return (
    <Button
      variant="outline"
      onClick={handleBookmark}
      disabled={loading}
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

export default ResourceBookmark;
