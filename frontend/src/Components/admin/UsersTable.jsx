import UserRow from "./UserRow";

const UsersTable = ({ users, loading, onView, onDelete, onPromote }) => {
  if (loading) {
    return (
      <div className="text-center py-16 text-gray500">Loading users...</div>
    );
  }
  if (users.length === 0) {
    return (
      <div
        className="
                bg-white
                rounded-2xl
                shadow-card
                border
                border-gray100
                py-16
                text-center
            "
      >
        <h2 className="text-2xl font-semibold text-secondary">
          No Users Found
        </h2>

        <p className="mt-2 text-gray500">Try changing the search or filters.</p>
      </div>
    );
  }
  return (
    <div
      className="
                bg-white
                rounded-2xl
                shadow-card
                overflow-x-auto
            "
    >
      <table className="min-w-[1150px] w-full">
        <thead>
          <tr className="border-b">
            <th className="w-72 px-6 py-5 text-center">User</th>

            <th className="w-72 text-center">Email</th>

            <th className="w-28 text-center">Branch</th>

            <th className="w-40 text-center">Last Login</th>

            <th className="w-36 text-center">Role</th>

            <th className="w-[340px] text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <UserRow
              key={user._id}
              user={user}
              onView={onView}
              onDelete={onDelete}
              onPromote={onPromote}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
