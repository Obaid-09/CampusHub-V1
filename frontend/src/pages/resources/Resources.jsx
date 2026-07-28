import ResourceToolbar from "../../components/resource/ResourceToolbar";
import ResourceFilters from "../../components/resource/ResourceFilters";
import ResultsInfo from "../../components/resource/ResultsInfo";
import ActiveFilters from "../../components/resource/ActiveFilters";
import ResourcePagination from "../../components/resource/ResourcePagination";
import ResourceGrid from "../../components/resource/ResourceGrid";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { resourceAPI } from "../../api/resource.api";

const Resources = () => {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const [pagination, setPagination] = useState({
    page: 1,
    totalPages: 1,
    totalResources: 0,
  });
  const initialFilters = {
    search: searchParams.get("search") || "",
    sort: searchParams.get("sort") || "latest",
    branch: searchParams.get("branch") || "",
    semester: searchParams.get("semester") || "",
    type: searchParams.get("type") || "",
  };

  const [selectedFilters, setSelectedFilters] = useState(initialFilters);
  const [filters, setFilters] = useState(initialFilters);
  useEffect(() => {
    const params = {};

    if (filters.search) params.search = filters.search;
    if (filters.branch) params.branch = filters.branch;
    if (filters.semester) params.semester = filters.semester;
    if (filters.type) params.type = filters.type;
    if (filters.sort !== "latest") params.sort = filters.sort;

    setSearchParams(params);
  }, [filters, setSearchParams]);
  const fetchResources = async (page = 1) => {
    try {
      setLoading(true);

      const params = {
        page,
        limit: 6,
        sort: filters.sort,
      };
      if (filters.search?.trim()) {
        params.search = filters.search.trim();
      }
      if (filters.branch) {
        params.branch = filters.branch;
      }
      if (filters.semester) {
        params.semester = filters.semester;
      }
      if (filters.type) {
        params.type = filters.type;
      }
      const response = await resourceAPI.getResources(params);
      const data = response.data.data;
      setResources(data.resources);
      setPagination({
        page: data.page,
        totalPages: data.totalPages,
        totalResources: data.totalResources,
      });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchResources(currentPage);
  }, [currentPage, filters]);
  const pageSize = 6;

  const handleResetFilters = () => {
    setSelectedFilters(initialFilters);
    setFilters(initialFilters);
    setCurrentPage(1);
  };
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
                setCurrentPage(1);
                setFilters(selectedFilters);
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
              showing={resources.length}
              total={pagination.totalResources}
            />

            <ActiveFilters
              filters={filters}
              setFilters={setFilters}
              setSelectedFilters={setSelectedFilters}
            />

            <ResourceGrid
              resources={resources}
              loading={loading}
              onResetFilters={handleResetFilters}
            />

            <ResourcePagination
              currentPage={currentPage}
              totalPages={pagination.totalPages}
              onPageChange={setCurrentPage}
            />
          </main>
        </div>
      </div>
    </section>
  );
};

export default Resources;
