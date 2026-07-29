const RecentUserRow = ({ user }) => {
  return (
    <div
      className="
        flex
        justify-between
        items-center
        py-4
        border-b
        border-gray100
        last:border-none
      "
    >
      <div className="flex items-center gap-4">
        <img
          src={user.avatar}
          alt={user.fullname}
          className="
            w-12
            h-12
            rounded-full
            object-cover
          "
        />

        <div>
          <h4
            className="
              font-semibold
              text-secondary
            "
          >
            {user.fullname}
          </h4>

          <p className="text-sm text-gray500">@{user.username}</p>
        </div>
      </div>

      <div className="text-right">
        <span
          className="
            inline-block
            px-3
            py-1
            rounded-full
            text-xs
            font-medium
            bg-blue-100
            text-blue-700
            capitalize
          "
        >
          {user.role}
        </span>

        <p className="text-xs text-gray400 mt-2">
          {new Date(user.createdAt).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default RecentUserRow;
