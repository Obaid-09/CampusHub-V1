import { useState } from "react";

import DashboardLayout from "../../components/dashboard/DashboardLayout";
import BookmarksToolbar from "../../components/dashboard/BookmarksToolbar";
import BookmarksGrid from "../../components/dashboard/BookmarksGrid";

import { dummyResources } from "../../constants/resources";

const Bookmarks = () => {

    const [search, setSearch] = useState("");

    const [sort, setSort] = useState("latest");

    const bookmarkedResources = dummyResources;

    const filteredResources = bookmarkedResources.filter((resource) =>
        resource.title.toLowerCase().includes(search.toLowerCase())
    );

    return (

        <DashboardLayout>

            <div className="space-y-8">

                <div>

                    <h1
                        className="
                            text-4xl
                            font-heading
                            font-bold
                            text-secondary
                        "
                    >
                        Bookmarks
                    </h1>

                    <p className="mt-2 text-gray600">
                        Quickly access your saved resources.
                    </p>

                </div>

                <BookmarksToolbar
                    search={search}
                    setSearch={setSearch}
                    sort={sort}
                    setSort={setSort}
                />

                <BookmarksGrid
                    resources={filteredResources}
                />

            </div>

        </DashboardLayout>

    );

};

export default Bookmarks;