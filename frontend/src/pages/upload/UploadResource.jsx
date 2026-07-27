// import UploadDropzone from "../../components/upload/UploadDropzone";
// import UploadForm from "../../components/upload/UploadForm";
// import { useState } from "react";
// import UploadPreview from "../../Components/upload/UploadPreview";
// import UploadProgress from "../../Components/upload/UploadProgress";
// import UploadSuccess from "../../Components/upload/UploadSuccess";

// const UploadResource = () => {

//     const [progress] = useState(65);

//     const [success] = useState(false);
//     const [form, setForm] = useState({
//         title: "",
//         description: "",
//         subject: "",
//         courseCode: "",
//         branch: "CSE",
//         semester: 1,
//         type: "Notes",
//         tags: [],
//     });
//     const [file, setFile] = useState(null);
//     return (

//         <section className="bg-background min-h-screen py-12">
//             <div className="max-w-5xl mx-auto px-6">
//                 <div className="mb-10">
//                     <h1
//                         className="
//                             text-4xl
//                             font-heading
//                             font-bold
//                             text-secondary
//                         "
//                     >
//                         Upload Resource
//                     </h1>

//                     <p className="mt-3 text-gray600">
//                         Share your notes, books, PYQs and study materials with students.
//                     </p>
//                 </div>
//                 <UploadDropzone
//                     file={file}
//                     setFile={setFile}
//                 />
//                 <div className="grid lg:grid-cols-2 gap-10 mt-10">

//                     <UploadForm
//                         form={form}
//                         setForm={setForm}
//                         file={file}
//                         setFile={setFile}
//                     />

//                     <UploadPreview
//                         form={form}
//                         file={file}
//                     />

//                 </div>

//                 {!success && (
//                     <UploadProgress
//                         progress={progress}
//                     />
//                 )}

//                 {success && (
//                     <UploadSuccess
//                         onUploadAgain={() => {}}
//                     />
//                 )}
//             </div>
//         </section>
//     );
// };

// export default UploadResource;

import ResourceEditor from "./ResourceEditor";

const UploadResource = () => {
  return <ResourceEditor />;
};

export default UploadResource;

// Phase 1
//  Upload page layout
//  Drag & drop upload area
//  File selection
// Phase 2
// Resource form
// Validation
// Tag input
// Thumbnail preview
// Phase 3
// Live preview card
// Upload progress UI
// Success screen
