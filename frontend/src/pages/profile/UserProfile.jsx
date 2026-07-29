import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProfileHeader from "../../Components/profile/ProfileHeader";
import Loader from "../../Components/ui/Loader";
import EmptyState from "../../Components/ui/EmptyState";
import { userAPI } from "../../api/user.api";

const UserProfile = () => {
  const { username } = useParams();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await userAPI.getProfile(username);
        setProfile(response.data.data);
      } catch {
        setProfile(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [username]);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center"><Loader text="Loading profile..." /></div>;
  }

  if (!profile) {
    return <div className="min-h-screen flex items-center justify-center px-6"><EmptyState title="Profile not found" /></div>;
  }

  return (
    <section className="bg-background min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-6">
        <ProfileHeader profile={profile} isOwner={false} />
        <div className="mt-8 bg-white rounded-3xl border border-gray100 shadow-card p-8">
          <h2 className="text-3xl font-heading font-bold text-secondary">About</h2>
          <p className="mt-5 leading-8 text-gray600">{profile.bio || "No bio added yet."}</p>
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
