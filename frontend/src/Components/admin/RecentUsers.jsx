import RecentUserRow from "./RecentUserRow";

const RecentUsers = ({ users, loading }) => {
  if (loading) {
    return (
      <div
        className="
        bg-white
        rounded-2xl
        shadow-card
        border
        border-gray100
        p-6
      "
      >
        Loading...
      </div>
    );
  }
  return (
    <div
      className="
                bg-white

                rounded-2xl

                shadow-card

                border
                border-gray100

                p-6
            "
    >
      <h2
        className="
                    text-2xl
                    font-heading
                    font-bold
                    text-secondary

                    mb-6
                "
      >
        Recent Users
      </h2>

      {users.map((user) => (
        <RecentUserRow key={user._id} user={user} />
      ))}
    </div>
  );
};

export default RecentUsers;
