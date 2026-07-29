const badgeColors = {
  Notes: "bg-primaryLight text-primary",
  PYQ: "bg-blue-100 text-blue-700",
  Assignment: "bg-purple-100 text-purple-700",
  "Lab Manual": "bg-green-100 text-green-700",
  Book: "bg-yellow-100 text-yellow-700",
};

const Badge = ({ children }) => {
  return (
    <span
      className={`
                inline-flex
                items-center
                px-3
                py-1
                rounded-full
                text-xs
                font-semibold
                ${badgeColors[children] || "bg-gray100 text-gray700"}
            `}
    >
      {children}
    </span>
  );
};

export default Badge;
