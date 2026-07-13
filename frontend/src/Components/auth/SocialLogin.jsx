import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {

    return (

        <div className="mt-6">

    <button
        className="
        w-full
        h-14

        rounded-xl

        bg-white

        flex
        items-center
        justify-center
        gap-4

        text-lg
        font-medium

        hover:scale-[1.02]

        transition
        "
    >
        <FcGoogle size={28}/>

        Continue with Google

    </button>

</div>

    );

};

export default SocialLogin;