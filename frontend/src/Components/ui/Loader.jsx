import { Loader2 } from "lucide-react";

const Loader = ({ size = 40, text = "Loading..." }) => {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <Loader2 size={size} className="animate-spin text-primary" />
      <p className="mt-3 text-gray500">{text}</p>
    </div>
  );
};

export default Loader;
