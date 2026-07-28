import { useEffect, useMemo, useState } from "react";

import { resourceAPI } from "../api/resource.api";

const useMyResources = () => {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);

  const [filters, setFilters] = useState({
    search: "",
    sort: "latest",
  });

  const fetchResources = async () => {
    try {
      setLoading(true);
      const { data } = await resourceAPI.getMyUploads();
      setResources(data.data.uploads || []);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchResources();
  }, []);

  const filteredResources = useMemo(() => {
    return [...resources]
      .filter((resource) =>
        resource.title.toLowerCase().includes(filters.search.toLowerCase()),
      )
      .sort((a, b) => {
        switch (filters.sort) {
          case "downloads":
            return b.downloads - a.downloads;
          case "views":
            return b.views - a.views;
          case "latest":
          default:
            return new Date(b.createdAt) - new Date(a.createdAt);
        }
      });
  }, [resources, filters]);

  const refreshResources = () => {
    fetchResources();
  };

  return {
    resources: filteredResources,
    allResources: resources,
    loading,
    filters,
    setFilters,
    refreshResources,
    setResources,
  };
};

export default useMyResources;
