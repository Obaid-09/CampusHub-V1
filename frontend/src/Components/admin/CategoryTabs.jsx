const CategoryTabs = ({ tabs, active, setActive }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {tabs.map((tab) => (
        <button
          key={tab.value}
          onClick={() => setActive(tab.value)}
          className={`
            py-3
            rounded-xl
            font-medium
            transition-all

            ${
              active === tab.value
                ? "bg-primary text-white shadow-md"
                : "bg-white border border-gray200 text-secondary hover:bg-gray50"
            }
          `}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default CategoryTabs;
