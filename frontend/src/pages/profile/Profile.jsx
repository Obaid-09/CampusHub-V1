import ProfileHeader from "../../Components/profile/ProfileHeader";
import ProfileStats from "../../Components/profile/ProfileStats";
import ProfileAbout from "../../Components/profile/ProfileAbout";
import UploadedResources from "../../Components/profile/UploadedResources";
import Achievements from "../../Components/profile/Achievements";
import ActivityTimeline from "../../Components/profile/ActivityTimeline";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import EditProfileModal from "../../Components/profile/EditProfileModal";
import { useRef } from "react";
import { authAPI } from "../../api/auth.api";
import { successToast, errorToast } from "../../utils/toast";
import useProfile from "../../hooks/useProfile";
import RecentlyViewed from "../../Components/profile/RecentlyViewed";
import Loader from "../../Components/ui/Loader";

const Profile = () => {
  const { user, loading, refreshUser } = useAuth();
  const [showEditProfile, setShowEditProfile] = useState(false);
  const fileInputRef = useRef(null);
  const [uploadingAvatar, setUploadingAvatar] = useState(false);
  const { profile } = useProfile();
  if (loading) {
    return <Loader/>
  }

  const handleAvatarClick = () => {
    fileInputRef.current.click();
  };

  const handleAvatarChange = async (e) => {
    const file = e.target.files[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      errorToast("Please select an image.");

      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      errorToast("Maximum image size is 5 MB.");

      return;
    }

    try {
      setUploadingAvatar(true);
      const formData = new FormData();
      formData.append("avatar", file);
      await authAPI.updateAvatar(formData);
      await refreshUser();

      successToast("Avatar updated successfully.");
    } catch (error) {
      errorToast(error.response?.data?.message || "Failed to update avatar.");
    } finally {
      setUploadingAvatar(false);

      e.target.value = "";
    }
  };

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
        <ProfileHeader
          profile={user}
          isOwner
          uploadingAvatar={uploadingAvatar}
          onAvatarClick={handleAvatarClick}
          onEdit={() => setShowEditProfile(true)}
        />

        <ProfileStats stats={profile.stats} loading={loading} />

        <ProfileAbout />

        <RecentlyViewed resources={profile.recentlyViewed} loading={loading} />

        <UploadedResources />

        <Achievements />
        <ActivityTimeline
          activities={profile.recentActivity}
          loading={loading}
        />
        <EditProfileModal
          open={showEditProfile}
          onClose={() => setShowEditProfile(false)}
        />
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          hidden
          onChange={handleAvatarChange}
        />
      </div>
    </section>
  );
};

export default Profile;
