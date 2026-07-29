const Skeleton = ({ className = "" }) => {
  return (
    <div
      className={`
                animate-pulse
                rounded-lg
                bg-gray200
                ${className}
            `}
    />
  );
};

export default Skeleton;
