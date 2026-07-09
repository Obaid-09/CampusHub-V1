import { Search } from "lucide-react";

import Button from "../../Components/ui/Button";

const HeroSearch = () => {

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
                <Search className="text-gray500"/>
            </div>

            <input
                placeholder="Search Notes, PYQs, Books..."
                className="
                    flex-1
                    py-5
                    outline-none
                "
            />

            <Button
                className="rounded-none rounded-r-2xl"
            >
                Search
            </Button>
        </div>
    );

};

export default HeroSearch;