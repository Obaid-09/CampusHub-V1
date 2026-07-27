import { useEffect, useMemo, useState } from "react";

import DashboardLayout from "../../components/dashboard/DashboardLayout";
import BookmarksToolbar from "../../components/dashboard/BookmarksToolbar";
import BookmarksGrid from "../../components/dashboard/BookmarksGrid";

import Loader from "../../components/ui/Loader";
import { resourceAPI } from "../../api/resource.api";
import { errorToast, successToast } from "../../utils/toast";

const Bookmarks = () => {
  const [search, setSearch] = useState("");

  const [sort, setSort] = useState("latest");
  const [bookmarkedResources, setBookmarkedResources] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookmarks = async () => {
      try {
        const response = await resourceAPI.getBookmarks();
        setBookmarkedResources(
          (response.data.data || [])
            .map((bookmark) => bookmark.resource)
            .filter(Boolean),
        );
      } catch (error) {
        errorToast(
          error.response?.data?.message || "Could not load bookmarks.",
        );
      } finally {
        setLoading(false);
      }
    };
    fetchBookmarks();
  }, []);

  const filteredResources = useMemo(
    () =>
      bookmarkedResources
        .filter((resource) =>
          resource.title.toLowerCase().includes(search.toLowerCase()),
        )
        .sort((first, second) => {
          if (sort === "rating")
            return (second.averageRating || 0) - (first.averageRating || 0);
          if (sort === "downloads") return second.downloads - first.downloads;
          return new Date(second.createdAt) - new Date(first.createdAt);
        }),
    [bookmarkedResources, search, sort],
  );

  const removeBookmark = async (resource) => {
    try {
      const response = await resourceAPI.bookmarkResource(resource._id);
      if (!response.data.data.bookmarked) {
        setBookmarkedResources((current) =>
          current.filter((item) => item._id !== resource._id),
        );
      }
      successToast(response.data.message);
    } catch (error) {
      errorToast(error.response?.data?.message || "Could not remove bookmark.");
    }
  };

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

        {loading ? (
          <Loader text="Loading bookmarks..." />
        ) : (
          <BookmarksGrid
            resources={filteredResources}
            onRemoveBookmark={removeBookmark}
          />
        )}
      </div>
    </DashboardLayout>
  );
};

export default Bookmarks;
