import Avatar from "../common/Avatar";

const ProfileDropdown = () => {

    // Later Redux
    const isLoggedIn = false;
    if (!isLoggedIn) return null;
    
    return (
        <button className="flex items-center gap-2">
            <Avatar size="md" />
        </button>
    );
};

export default ProfileDropdown;