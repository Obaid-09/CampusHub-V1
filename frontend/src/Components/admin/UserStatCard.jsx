import { Files, Download, Bookmark, Trash2 } from "lucide-react";

const icons = {
  files: Files,
  download: Download,
  bookmark: Bookmark,
  trash: Trash2,
};

const UserStatCard = ({ stat }) => {
  const Icon = icons[stat.icon];

  return (
    <div
      className="
        bg-white
        rounded-2xl
        border
        border-gray100
        shadow-card
        p-6
      "
    >
      <div className="flex items-center justify-between">
        <p className="text-gray500">{stat.title}</p>

        {Icon && <Icon size={24} className={stat.color} />}
      </div>

      <h2
        className="
          mt-4
          text-4xl
          font-bold
          text-secondary
        "
      >
        {stat.value}
      </h2>
    </div>
  );
};

export default UserStatCard;
