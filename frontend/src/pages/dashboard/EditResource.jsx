import ResourceEditor from "../upload/ResourceEditor";

import { dummyResource } from "../../constants/resources";

const EditResource = () => {

    return (

        <ResourceEditor

            editMode={true}

            initialData={dummyResource[0]}

        />

    );

};

export default EditResource;
