import ProfileHeader from "../../components/profile/ProfileHeader";
import ProfileStats from "../../components/profile/ProfileStats";
import ProfileAbout from "../../components/profile/ProfileAbout";
import UploadedResources from "../../components/profile/UploadedResources";
import Achievements from "../../components/profile/Achievements";
import ActivityTimeline from "../../components/profile/ActivityTimeline";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import EditProfileModal from "../../components/profile/EditProfileModal";

const Profile = () => {
  const { user, loading } = useAuth();
  const [showEditProfile, setShowEditProfile] = useState(false);

  if (loading) {
    return null;

    // Later:
    // return <ProfileSkeleton />
  }

  return (
    <section
      className="
                bg-background
                min-h-screen
                py-12
            "
    >
      <div
        className="
                    max-w-7xl
                    mx-auto
                    px-6
                "
      >
        <ProfileHeader isOwner={true} onEdit={() => setShowEditProfile(true)} />

        <ProfileStats />

        <ProfileAbout />

        <UploadedResources />

        <Achievements />
        <ActivityTimeline />
        <EditProfileModal
          open={showEditProfile}
          onClose={() => setShowEditProfile(false)}
        />
      </div>
    </section>
  );
};

export default Profile;
