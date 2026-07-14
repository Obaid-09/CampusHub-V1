import ResourceCard from "../resource/ResourceCard";
import AdminActionBar from "./AdminActionBar";

const AdminResourceItem = ({
    resource,
}) => {

    return (

        <div>

            <ResourceCard

                resource={resource}

            />

            <AdminActionBar

                resource={resource}

            />

        </div>

    );

};

export default AdminResourceItem;