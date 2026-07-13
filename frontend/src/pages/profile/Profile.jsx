import ProfileHeader from "../../components/profile/ProfileHeader";
import ProfileStats from "../../components/profile/ProfileStats";
import ProfileAbout from "../../components/profile/ProfileAbout";
import UploadedResources from "../../Components/profile/UploadedResources";
import Achievements from "../../Components/profile/Achievements";
import ActivityTimeline from "../../Components/profile/ActivityTimeline";
import { dummyProfile } from "../../constants/profile";


const Profile = () => {

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
                    profile={dummyProfile}
                    isOwner={true}
                />

                <ProfileStats
                    profile={dummyProfile}
                />

                <ProfileAbout
                    profile={dummyProfile}
                />

                <UploadedResources />

                <Achievements />
                <ActivityTimeline />

            </div>

        </section>

    );

};

export default Profile;