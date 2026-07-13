import { Upload } from "lucide-react";

const AvatarUpload = ({
    disabled,
}) => {

    return (

        <div>

            <label className="block mb-2 font-medium text-gray200">

                Profile Picture

                <span className="ml-2 text-sm text-gray400">
                    (Optional)
                </span>

            </label>

            <label
                className="
                    h-32
                    rounded-xl
                    border-2
                    border-dashed
                    border-white/10

                    bg-white/5

                    flex
                    flex-col
                    justify-center
                    items-center

                    cursor-pointer

                    hover:border-primary

                    transition-all
                "
            >

                <Upload
                    size={28}
                    className="text-primary"
                />

                <p className="mt-3 text-gray400">

                    Upload Avatar

                </p>

                <input
                    type="file"
                    hidden
                    accept="image/*"
                    disabled={disabled}
                />

            </label>

        </div>

    );

};

export default AvatarUpload;