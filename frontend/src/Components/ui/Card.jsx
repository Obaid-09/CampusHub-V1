const Card = ({ children, className = "", hover = true, padding = "p-6" }) => {
  return (
    <div
      className={`
                bg-white
                rounded-2xl
                shadow-card
                border
                border-gray100
                ${padding}
                ${hover ? "hover:-translate-y-1 hover:shadow-xl" : ""}
                transition-all
                duration-300
                ${className}
            `}
    >
      {children}
    </div>
  );
};

export default Card;
