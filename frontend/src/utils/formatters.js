export const formatFileSize = (bytes) => {

    if (!bytes) return "0 KB";

    const kb = bytes / 1024;

    if (kb < 1024) {
        return `${kb.toFixed(2)} KB`;
    }

    return `${(kb / 1024).toFixed(2)} MB`;
};

export const formatDate = (date) =>
    new Date(date).toLocaleDateString("en-IN");