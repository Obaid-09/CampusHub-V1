import ResourceToolbar from "../../Components/resource/ResourceToolbar";
import ResourceFilters from "../../components/resource/ResourceFilters";
import ResultsInfo from "../../components/resource/ResultsInfo";
import ActiveFilters from "../../components/resource/ActiveFilters";
import ResourcePagination from "../../components/resource/ResourcePagination";
import ResourceGrid from "../../components/resource/ResourceGrid";
import { useState } from "react";

import { dummyResources } from "../../constants/resources";


const Resources = () => {

    const [resources] = useState(dummyResources);
    const initialFilters = {
        search: "",
        sort: "latest",
        branch: "",
        semester: "",
        type: "",
    };

    const [selectedFilters, setSelectedFilters] = useState(initialFilters);
    const [filters, setFilters] = useState(initialFilters);

    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 6;


    const filteredResources = resources.filter((resource) => {
        const searchMatch =
            resource.title
                .toLowerCase()
                .includes(filters.search.toLowerCase());

        const branchMatch =
            !filters.branch ||
            resource.branch === filters.branch;

        const semesterMatch =
            !filters.semester ||
            resource.semester === Number(filters.semester);

        const typeMatch =
            !filters.type ||
            resource.type === filters.type;

        return (
            searchMatch &&
            branchMatch &&
            semesterMatch &&
            typeMatch
        );
    });

    const sortedResources = [...filteredResources];
    switch (filters.sort) {
        case "downloads":
            sortedResources.sort(
                (a, b) => b.downloads - a.downloads
            );
            break;

        case "views":
            sortedResources.sort(
                (a, b) => b.views - a.views
            );
            break;

        case "rating":
            sortedResources.sort(
                (a, b) => b.rating - a.rating
            );
            break;

        default:
            sortedResources.sort(
                (a, b) =>
                    new Date(b.createdAt) -
                    new Date(a.createdAt)
            );
    }


    const start = (currentPage - 1) * pageSize;
    const paginatedResources = sortedResources.slice(
        start,
        start + pageSize
    );

    const handleResetFilters = () => {
        console.log("RESET CLICKED");
        setSelectedFilters(initialFilters);
        setFilters(initialFilters);
        setCurrentPage(1);
    };

    const totalPages = Math.ceil(
        sortedResources.length / pageSize
    );
    
    return (

        <section className="bg-background min-h-screen py-12">
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <div className="mb-10">
                    <h1 className="text-4xl font-heading font-bold text-secondary">
                        Browse Resources
                    </h1>
                    <p className="mt-2 text-gray600">
                        Discover notes, PYQs, books and assignments uploaded by students.
                    </p>
                </div>

                {/* Search + Sort */}
                <ResourceToolbar
                    selectedFilters={selectedFilters}
                    setSelectedFilters={setSelectedFilters}
                />

                {/* Layout */}
                <div className="mt-10 grid lg:grid-cols-4 gap-8">

                    {/* Sidebar */}

                    <aside className="lg:col-span-1">
                        <ResourceFilters
                            selectedFilters={selectedFilters}
                            setSelectedFilters={setSelectedFilters}
                            onApply={() => {
                                setFilters(selectedFilters);
                                setCurrentPage(1);
                            }}
                            onReset={handleResetFilters}
                        />
                    </aside>

                    {/* Resources */}
                    <main className="lg:col-span-3">
                        {/* <ResultsInfo total={filteredResources.length} />
                        <ActiveFilters
                            filters={filters}
                            updateFilters={updateFilters}
                    /> */}

                        <ResultsInfo
                            showing={paginatedResources.length}
                            total={sortedResources.length}
                        />

                        <ActiveFilters
                            filters={filters}
                            setFilters={setFilters}
                            setSelectedFilters={setSelectedFilters}
                        />

                        <ResourceGrid
                            resources={paginatedResources}
                            loading={false}
                            onResetFilters={handleResetFilters}
                        />

                        <ResourcePagination
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onPageChange={setCurrentPage}
                        />
                    </main>

                </div>
            </div>
        </section>

    );

};

export default Resources;
