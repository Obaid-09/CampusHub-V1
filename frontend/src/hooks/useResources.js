import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { resourceAPI } from "../api/resource.api";

const useResources = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const [resources, setResources] = useState([]);
    const [loading, setLoading] = useState(false);

    const [pagination, setPagination] = useState({
        page: 1,
        totalPages: 1,
        totalResources: 0,
    });

    const filters = {
        page: searchParams.get("page") || 1,
        search: searchParams.get("search") || "",
        sort: searchParams.get("sort") || "latest",
        branch: searchParams.get("branch") || "",
        semester: searchParams.get("semester") || "",
        type: searchParams.get("type") || "",
    };

    const fetchResources = async () => {
        try {
            setLoading(true);
            const { data } =
                await resourceAPI.getResources(filters);
            setResources(data.data.resources);
            setPagination({
                page: data.data.page,
                totalPages: data.data.totalPages,
                totalResources: data.data.totalResources,
            });
        }
        catch (error) {
            console.log(error);
        }
        finally {
            setLoading(false);
        }
    };

    const query = searchParams.toString();
    useEffect(() => {
        fetchResources();
    }, [query]);
    // useEffect(() => {
    //     setResources(dummyResources);
    // }, []);

    const updateFilters = (newFilters) => {

        const params = new URLSearchParams(searchParams.toString());
        Object.entries(newFilters).forEach(([key, value]) => {

            if (value) {
                params.set(key, value);
            }
            else {
                params.delete(key);
            }
        });

        params.set("page", 1);
        setSearchParams(params);

    };

    return {
        resources,
        loading,
        pagination,
        filters,
        updateFilters,
    };

};

export default useResources;