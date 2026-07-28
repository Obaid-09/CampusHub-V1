import ActionButton from "./ActionButton";

const UserActions = ({ user, onPromote, onDelete }) => {
  return (
    <div
      className="
                bg-white
                rounded-2xl
                border
                border-gray100
                shadow-card
                p-8
            "
    >
      <h2
        className="
                    text-2xl
                    font-bold
                    text-secondary
                    mb-8
                "
      >
        Admin Actions
      </h2>

      <div
        className="
                    grid
                    md:grid-cols-2
                    xl:grid-cols-4
                    gap-4
                "
      >
        <ActionButton text="Promote" onClick={() => onPromote(user)} />
        <ActionButton
          text="Delete User"
          variant="danger"
          onClick={() => onDelete(user)}
        />
      </div>
    </div>
  );
};

export default UserActions;
