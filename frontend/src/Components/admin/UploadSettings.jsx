import Input from "../ui/Input";
import Select from "../ui/Select";

const UploadSettings = () => {

    return (

        <div className="grid md:grid-cols-2 gap-6">

            <Input
                label="Maximum Upload Size (MB)"
                value="50"
            />

            <Input
                label="Maximum Files Per Upload"
                value="1"
            />

            <Select

                label="Allowed File Types"

                options={[

                    {
                        value:"pdf",
                        label:"PDF Only",
                    },

                    {
                        value:"documents",
                        label:"PDF + DOCX",
                    },

                    {
                        value:"all",
                        label:"All Documents",
                    },

                ]}

            />

            <Select

                label="Default Resource Visibility"

                options={[

                    {
                        value:"public",
                        label:"Public",
                    },

                    {
                        value:"private",
                        label:"Private",
                    },

                ]}

            />

        </div>

    );

};

export default UploadSettings;