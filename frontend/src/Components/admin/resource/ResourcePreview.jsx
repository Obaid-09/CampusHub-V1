import getThumbnail from "../../../utils/getThumbnail";

const ResourcePreview = ({ resource }) => {
  return (
    <div
      className="
                bg-white
                rounded-2xl
                border
                border-gray100
                shadow-card
                overflow-hidden
            "
    >
      <img
        src={getThumbnail(resource)}
        alt=""
        className="
                    w-full
                    h-[450px]
                    object-cover
                "
      />
    </div>
  );
};

export default ResourcePreview;
