import AdminResourceCard from "./AdminResourceCard";

const AdminResourcesGrid = ({
    resources,
    onView,
    onEdit,
    onDelete,
    onApprove,
    onReject,
    onAnalytics,
    onUploader,
}) => {

    return (

        <div
            className="
                grid
                md:grid-cols-2
                xl:grid-cols-3
                gap-8
            "
        >

            {

                resources.map(resource=>(

                    <AdminResourceCard

                        key={resource._id}

                        resource={resource}

                        onView={onView}
                        onEdit={onEdit}
                        onDelete={onDelete}
                        onApprove={onApprove}
                        onReject={onReject}
                        onAnalytics={onAnalytics}
                        onUploader={onUploader}

                    />

                ))

            }

        </div>

    );

};

export default AdminResourcesGrid;