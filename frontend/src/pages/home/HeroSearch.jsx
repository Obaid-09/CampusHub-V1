import { Search } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../Components/ui/ButtonH";

const HeroSearch = () => {
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const handleSearch = () => {
    const query = search.trim();

    if (!query) {
      navigate("/resources");
      return;
    }

    navigate(`/resources?search=${encodeURIComponent(query)}`);
  };

  return (
    <div
      className="
                mt-10
                bg-white
                rounded-2xl
                shadow-card
                flex
                overflow-hidden
            "
    >
      <div
        className="
                    flex
                    items-center
                    px-5
                "
      >
        <Search className="text-gray500" />
      </div>

      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
        placeholder="Search Notes, PYQs, Books..."
        className="
                    flex-1
                    py-5
                    outline-none
                "
      />

      <Button className="rounded-none rounded-r-2xl" onClick={handleSearch}>
        Search
      </Button>
    </div>
  );
};

export default HeroSearch;
