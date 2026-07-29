import { Bookmark } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../ui/Button";

const EmptyBookmarks = () => {
  return (
    <div className="py-24 text-center">
      <Bookmark
        size={72}
        className="
                    mx-auto
                    text-primary
                "
      />

      <h2
        className="
                    mt-6
                    text-4xl
                    font-heading
                    font-bold
                    text-secondary
                "
      >
        No Bookmarks Yet
      </h2>

      <p
        className="
                    mt-4
                    text-gray600
                "
      >
        Save resources to access them quickly later.
      </p>

      <Link to="/resources">
        <Button className="mt-8">Browse Resources</Button>
      </Link>
    </div>
  );
};

export default EmptyBookmarks;
