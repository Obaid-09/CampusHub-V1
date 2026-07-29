const generateThumbnail = (pdfUrl) => {
    if (!pdfUrl) return "";

    return pdfUrl
        .replace("/raw/upload/", "/image/upload/")
        .replace(".pdf", ".jpg")
        .replace("/upload/", "/upload/pg_1,w_500,c_fill,q_auto,f_auto/");
};

export default generateThumbnail;

// import { cloudinary } from "cloudinary";

// const generateThumbnail = (publicId) => {
//     return cloudinary.url(publicId, {
//         resource_type: "image",
//         format: "jpg",
//         transformation: [
//             {
//                 page: 1,
//                 width: 500,
//                 crop: "fill",
//                 quality: "auto",
//                 fetch_format: "auto",
//             },
//         ],
//     });
// };
