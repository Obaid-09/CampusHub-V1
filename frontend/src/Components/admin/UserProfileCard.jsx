import UserInfoRow from "./UserInfoRow";

const UserProfileCard = ({ user }) => {
  return (
    <div
      className="
                bg-white
                rounded-2xl
                shadow-card
                border
                border-gray100
                p-8
            "
    >
      <div
        className="
                    flex
                    gap-6
                    items-center
                "
      >
        <img
          src={user.avatar || "https://placehold.co/100x100"}
          alt={user.fullname}
          className="
                    w-24
                    h-24
                    rounded-full
                    object-cover
                "
        />

        <div>
          <h1
            className="
                            text-3xl
                            font-heading
                            font-bold
                            text-secondary
                        "
          >
            {user.fullname}
          </h1>

          <p className="text-gray500">@{user.username}</p>
        </div>
      </div>

      <div className="mt-8 space-y-1">
        <UserInfoRow label="Email" value={user.email} />

        <UserInfoRow label="College" value={user.college} />

        <UserInfoRow label="Branch" value={user.branch} />

        <UserInfoRow label="Year" value={user.year} />

        <UserInfoRow label="Semester" value={user.semester} />

        <UserInfoRow
          label="Role"
          value={user.role.charAt(0).toUpperCase() + user.role.slice(1)}
        />

        <UserInfoRow
          label="Joined"
          value={new Date(user.createdAt).toLocaleDateString()}
        />

        <UserInfoRow
          label="Last Login"
          value={
            user.lastLogin ? new Date(user.lastLogin).toLocaleString() : "Never"
          }
        />
      </div>
    </div>
  );
};

export default UserProfileCard;
