import Button from "../ui/Button";

const DangerZone = () => {
  return (
    <div
      className="
                mt-10
                bg-red-50
                border
                border-red-200
                rounded-2xl
                p-8
            "
    >
      <h2
        className="
                    text-2xl
                    font-heading
                    font-bold
                    text-red-700
                "
      >
        Danger Zone
      </h2>

      <p
        className="
                    mt-3
                    text-red-600
                "
      >
        Deleting this resource is permanent.
      </p>

      <Button
        className="
                    mt-6
                    bg-red-600
                    hover:bg-red-700
                "
      >
        Delete Resource
      </Button>
    </div>
  );
};

export default DangerZone;
