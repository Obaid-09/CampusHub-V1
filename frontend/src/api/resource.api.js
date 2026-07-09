import axiosInstance from "./axios";

export const resourceAPI = {

    getResources: (params) =>
        axiosInstance.get(
            "/resources",
            {
                params,
            }
        ),

    getResourceById: (resourceId) =>
        axiosInstance.get(
            `/resources/${resourceId}`
        ),

    uploadResource: (formData) =>
        axiosInstance.post(
            "/resources/upload",
            formData,
            {
                headers: {
                    "Content-Type":
                        "multipart/form-data",
                },
            }
        ),

    updateResource: (
        resourceId,
        formData
    ) =>
        axiosInstance.patch(
            `/resources/${resourceId}`,
            formData,
            {
                headers: {
                    "Content-Type":
                        "multipart/form-data",
                },
            }
        ),

    deleteResource: (resourceId) =>
        axiosInstance.delete(
            `/resources/${resourceId}`
        ),

    bookmarkResource: (resourceId) =>
        axiosInstance.patch(
            `/resources/${resourceId}/bookmark`
        ),

    viewResource: (resourceId) =>
        axiosInstance.patch(
            `/resources/${resourceId}/view`
        ),

    downloadResource: (resourceId) =>
        axiosInstance.patch(
            `/resources/${resourceId}/download`
        ),

};