import { Edit, GraduationCap, Calendar } from "lucide-react";
import Button from "../ui/Button";
import useAuth from "../../hooks/useAuth";

const ProfileHeader = ({ isOwner, onEdit }) => {
  const { user } = useAuth();

  return (
    <div
      className="
                bg-white
                rounded-3xl
                shadow-card
                border
                border-gray100
                p-8
            "
    >
      <div
        className="
                    flex
                    flex-col
                    lg:flex-row
                    items-center
                    justify-between
                    gap-8
                "
      >
        <div
          className="
                        flex
                        flex-col
                        md:flex-row
                        items-center
                        gap-6
                    "
        >
          <img
            src={user?.avatar}
            alt={user?.fullname}
            className="
                            w-36
                            h-36
                            rounded-full
                            object-cover
                            border-4
                            border-primary/20
                        "
          />

          <div>
            <h1
              className="
                                text-4xl
                                font-heading
                                font-bold
                                text-secondary
                            "
            >
              {user?.fullname}
            </h1>

            <p
              className="
                                mt-1
                                text-primary
                                font-medium
                            "
            >
              @{user?.username}
            </p>

            <div
              className="
                                mt-4
                                flex
                                flex-wrap
                                gap-4
                                text-gray500
                            "
            >
              <span className="flex items-center gap-2">
                <GraduationCap size={18} />
                {user?.branch}
              </span>

              <span>Semester {user?.semester}</span>

              <span>{user?.college}</span>
            </div>

            <div
              className="
                                mt-3
                                flex
                                items-center
                                gap-2
                                text-gray400
                            "
            >
              <Calendar size={16} />
              Joined{" "}
              {user?.createdAt
                ? new Date(user.createdAt).toLocaleDateString(
                    "en-IN",

                    {
                      month: "long",

                      year: "numeric",
                    },
                  )
                : "--"}
            </div>
          </div>
        </div>

        {isOwner && (
          <Button onClick={onEdit}>
            <Edit size={18} />
            Edit Profile
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProfileHeader;
