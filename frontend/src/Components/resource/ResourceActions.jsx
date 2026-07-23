import Button from "../ui/Button";
import { Download, Share2, Flag } from "lucide-react";

import ResourceBookmark from "./ResourceBookmark";

const ResourceActions = ({ resource }) => {
  return (
    <div
      className="
                bg-white
                rounded-2xl
                shadow-card
                border
                border-gray100
                p-6
                space-y-4
            "
    >
      <Button className="w-full flex justify-center items-center gap-2">
        <Download size={18} />
        Download PDF
      </Button>

      {/* <Button
                variant="outline"
                className="w-full flex justify-center items-center gap-2"
            >
                <Bookmark size={18} />
                Bookmark
            </Button> */}
      <ResourceBookmark resource={resource} variant="button" />

      <Button
        variant="outline"
        className="w-full flex justify-center items-center gap-2"
      >
        <Share2 size={18} />
        Share
      </Button>

      <Button
        variant="outline"
        className="
                    w-full
                    flex
                    justify-center
                    items-center
                    gap-2
                    border-red-300
                    text-red-600
                    hover:bg-red-50
                "
      >
        <Flag size={18} />
        Report Resource
      </Button>
    </div>
  );
};

export default ResourceActions;
