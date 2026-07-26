import UserResourceRow from "./UserResourceRow";

const UserResourcesTable = ({ resources = [] }) => {
  return (
    <div
      className="
                bg-white
                rounded-2xl
                border
                border-gray100
                shadow-card
                overflow-x-auto
            "
    >
      <div className="p-6">
        <h2
          className="
                        text-2xl
                        font-bold
                        text-secondary
                    "
        >
          Uploaded Resources
        </h2>
      </div>
      {resources.length === 0 ? (
        <div className="py-12 text-center text-gray500">
          No uploaded resources.
        </div>
      ) : (
        <table className="w-full">
          <thead>
            <tr className="border-y border-gray100">
              <th className="py-4 text-center px-8">Title</th>

              <th className="py-4 text-center px-8">Subject</th>

              <th className="py-4 text-center px-8">Type</th>

              <th className="py-4 text-center px-8">Downloads</th>

              <th className="py-4 text-center px-8">Status</th>

              <th className="py-4 text-center px-8">Actions</th>
            </tr>
          </thead>

          <tbody className="py-4 text-center px-8">
            {resources.map((resource) => (
              <UserResourceRow key={resource._id} resource={resource} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UserResourcesTable;
