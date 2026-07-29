// import { Upload, ArrowRight } from "lucide-react";
// import HeroSearch from "./HeroSearch";
// import Button from "../../components/ui/Button";
// import { useNavigate } from "react-router-dom";
// import hero from "../../assets/H2.png"
// const Hero = () => {

//     const navigate = useNavigate();
//   return (
//     <section
//       className="
//                 bg-background
//                 pt-24
//                 pb-20
//             "
//     >
//       <div
//         className="
//                     max-w-6xl
//                     mx-auto
//                     px-6

//                     grid
//                     lg:grid-cols-2
//                     gap-16
//                     items-center
//                 "
//       >
//         {/* Left */}

//         <div>
//           <div
//             className="
//                             inline-flex
//                             items-center
//                             gap-2
//                             bg-primaryLight
//                             text-primary
//                             px-4
//                             py-2
//                             rounded-full
//                             text-sm
//                             font-medium
//                             mb-6
//                         "
//           >
//             📚 Trusted by Engineering Students
//           </div>
//           <h1
//             className="
//                             text-5xl
//                             lg:text-6xl
//                             font-heading
//                             font-bold
//                             text-secondary
//                             leading-tight
//                         "
//           >
//             Find
//             <span className="text-primary"> Notes, PYQs & Study Resources</span>
//             <br />
//             All in One Place
//           </h1>

//           <p
//             className="
//                             mt-8
//                             text-lg
//                             text-gray600
//                             leading-8
//                             max-w-xl
//                         "
//           >
//             Search thousands of verified notes, books, assignments, previous
//             year questions and lab manuals uploaded by your seniors.
//           </p>

//           <HeroSearch />

//           <div className="mt-8 flex gap-5 flex-wrap">
//             <Button
//                 onClick={() => navigate("/resources")}>
//               Browse Resources
//               <ArrowRight size={18} />
//             </Button>
//             <Button
//             onClick={() => navigate("/upload")}
//             variant="outline">
//               <Upload size={18} />
//               Upload Resource
//             </Button>
//           </div>

//           <div
//             className="
//                             flex
//                             gap-10
//                             mt-14
//                             flex-wrap
//                         "
//           >
//             <div>
//               <h2 className="text-3xl font-bold text-primary">10K+</h2>
//               <p className="text-gray500">Resources</p>
//             </div>
//             <div>
//               <h2 className="text-3xl font-bold text-primary">2K+</h2>
//               <p className="text-gray500">Students</p>
//             </div>
//             <div>
//               <h2 className="text-3xl font-bold text-primary">25K+</h2>
//               <p className="text-gray500">Downloads</p>
//             </div>
//           </div>
//         </div>

//         {/* Right */}
//         <div>
//             <img src = {hero} alt = "Hero"
//             className="h-[700px] min-w-full"/>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

// import { Upload, ArrowRight, ShieldCheck } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// import HeroSearch from "./HeroSearch";
// import Button from "../../components/ui/Button"

// import hero from "../../assets/H2.png";

// const Hero = () => {
//   const navigate = useNavigate();

//   return (
//     <section className="relative overflow-hidden bg-background pt-28 pb-24">
//       {/* Background Blur */}
//       <div className="absolute inset-0 pointer-events-none overflow-hidden">
//         <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
//         <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
//       </div>

//       <div
//         className="
//           relative
//           max-w-7xl
//           mx-auto
//           px-6
//           grid
//           lg:grid-cols-[1.05fr_0.95fr]
//           gap-12
//           items-center
//         "
//       >
//         {/* ================= LEFT ================= */}

//         <div>
//           {/* Trust Badge */}

//           <div
//             className="
//               inline-flex
//               items-center
//               gap-2
//               bg-[#FFF2E8]
//               text-primary
//               px-5
//               py-3
//               rounded-full
//               font-medium
//               shadow-sm
//             "
//           >
//             <ShieldCheck size={18} />
//             Trusted by Engineering Students
//           </div>

//           {/* Heading */}

//           <h1
//             className="
//               mt-8
//               font-heading
//               font-bold
//               text-secondary
//               text-5xl
//               lg:text-7xl
//               leading-[1.05]
//               tracking-tight
//             "
//           >
//             Find{" "}
//             <span className="text-primary">
//               Notes, PYQs
//               <br />& Study Resources
//             </span>
//             <br />
//             All in One Place
//           </h1>

//           {/* Description */}

//           <p
//             className="
//               mt-8
//               max-w-xl
//               text-xl
//               leading-9
//               text-gray600
//             "
//           >
//             Access verified notes, books, previous year papers, assignments and
//             lab manuals uploaded by seniors. Save time and study smarter with
//             CampusHub.
//           </p>

//           {/* Search */}

//           <div className="mt-10">
//             <HeroSearch />
//           </div>

//           {/* CTA */}

//           <div className="mt-10 flex flex-wrap gap-5">
//             <Button
//               onClick={() => navigate("/resources")}
//               className="px-8 py-4 rounded-2xl"
//             >
//               Browse Resources
//               <ArrowRight size={18} />
//             </Button>

//             <Button
//               variant="outline"
//               onClick={() => navigate("/upload")}
//               className="px-8 py-4 rounded-2xl"
//             >
//               <Upload size={18} />
//               Upload Resource
//             </Button>
//           </div>

//           {/* Statistics */}

//           <div className="grid grid-cols-3 gap-10 mt-16">
//             <div>
//               <h2 className="text-4xl font-bold text-primary">10K+</h2>
//               <p className="mt-2 text-gray500">Resources</p>
//             </div>

//             <div>
//               <h2 className="text-4xl font-bold text-primary">2K+</h2>
//               <p className="mt-2 text-gray500">Students</p>
//             </div>

//             <div>
//               <h2 className="text-4xl font-bold text-primary">25K+</h2>
//               <p className="mt-2 text-gray500">Downloads</p>
//             </div>
//           </div>
//         </div>

//         {/* ================= RIGHT ================= */}

//         <div className="hidden lg:block flex justify-center lg:justify-end">
//           <img
//             src={hero}
//             alt="CampusHub Hero"
//             className="
//               w-full
//               max-w-[720px]
//               object-contain
//               drop-shadow-2xl
//               select-none
//             "
//             draggable={false}
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

// import {
//   UploadCloud,
//   ArrowRight,
//   ShieldCheck,
//   Folder,
//   FileText,
//   Users,
//   Landmark,
//   Download,
// } from "lucide-react";
// import HeroSearch from "./HeroSearch";
// import Button from "../../components/ui/Button";
// import { useNavigate } from "react-router-dom";
// import hero from "../../assets/H2.png";

// const stats = [
//   {
//     icon: FileText,
//     value: "5,000+",
//     label: "Resources",
//     iconBg: "bg-primaryLight",
//     iconColor: "text-primary",
//   },
//   {
//     icon: Users,
//     value: "500+",
//     label: "Contributors",
//     iconBg: "bg-blue-100",
//     iconColor: "text-blue-500",
//   },
//   {
//     icon: Landmark,
//     value: "8",
//     label: "Branches",
//     iconBg: "bg-green-100",
//     iconColor: "text-green-600",
//   },
//   {
//     icon: Download,
//     value: "10,000+",
//     label: "Downloads",
//     iconBg: "bg-purple-100",
//     iconColor: "text-purple-500",
//   },
// ];

// const Hero = () => {
//   const navigate = useNavigate();

//   return (
//     <section className="bg-background pt-24 pb-20">
//       <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
//         {/* Left */}
//         <div>
//           <div className="inline-flex items-center gap-2 bg-primaryLight text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
//             <ShieldCheck size={16} />
//             Trusted by Engineering Students
//           </div>

//           <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-secondary leading-tight">
//             Find
//             <span className="text-primary">
//               {" "}
//               Notes, PYQs
//               <br />& Study Resources
//             </span>
//             <br />
//             All in One Place
//           </h1>

//           <p className="mt-8 text-lg text-gray600 leading-8 max-w-xl">
//             Access verified notes, books, previous year papers, assignments, and
//             lab manuals uploaded by seniors. Save time and study smarter with{" "}
//             <span className="text-primary font-semibold">CampusHub</span>.
//           </p>

//           <HeroSearch />

//           <div className="mt-8 flex gap-5 flex-wrap items-center">
//             <Button onClick={() => navigate("/resources")}>
//               <Folder size={18} />
//               Browse Resources
//               <ArrowRight size={18} />
//             </Button>
//             <Button onClick={() => navigate("/upload")} variant="outline">
//               <UploadCloud size={18} />
//               Upload Resource
//             </Button>
//           </div>

//           <div className="flex gap-8 md:gap-10 mt-14 flex-wrap">
//             {stats.map(({ icon: Icon, value, label, iconBg, iconColor }) => (
//               <div key={label} className="flex flex-col">
//                 <div
//                   className={`w-14 h-14 rounded-full flex items-center justify-center mb-3 ${iconBg}`}
//                 >
//                   <Icon size={22} className={iconColor} />
//                 </div>
//                 <h2 className="text-2xl font-bold text-secondary">{value}</h2>
//                 <p className="text-gray500 text-sm">{label}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Right */}
//         <div className="flex justify-center">
//           <img
//             src={hero}
//             alt="CampusHub creative campus ecosystem illustration"
//             className="w-auto h-auto max-h-[560px] lg:max-h-[700px] object-contain"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

// import {
//   UploadCloud,
//   ArrowRight,
//   ShieldCheck,
//   Folder,
//   FileText,
//   Users,
//   Landmark,
//   Download,
// } from "lucide-react";
// import HeroSearch from "./HeroSearch";
// import Button from "../../components/ui/Button";
// import { useNavigate } from "react-router-dom";
// import hero from "../../assets/Hero_illus.png"

// const stats = [
//   {
//     icon: FileText,
//     value: "5,000+",
//     label: "Resources",
//     iconBg: "bg-primaryLight",
//     iconColor: "text-primary",
//   },
//   {
//     icon: Users,
//     value: "500+",
//     label: "Contributors",
//     iconBg: "bg-blue-100",
//     iconColor: "text-blue-500",
//   },
//   {
//     icon: Landmark,
//     value: "8",
//     label: "Branches",
//     iconBg: "bg-green-100",
//     iconColor: "text-green-600",
//   },
//   {
//     icon: Download,
//     value: "10,000+",
//     label: "Downloads",
//     iconBg: "bg-purple-100",
//     iconColor: "text-purple-500",
//   },
// ];

// const Hero = () => {
//   const navigate = useNavigate();

//   return (
//     <section className="bg-background pt-24 pb-20">
//       <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
//         {/* Left */}
//         <div>
//           <div className="inline-flex items-center gap-2 bg-primaryLight text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
//             <ShieldCheck size={16} />
//             Trusted by Engineering Students
//           </div>

//           <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-secondary leading-tight">
//             Find
//             <span className="text-primary">
//               {" "}
//               Notes, PYQs
//               <br />& Study Resources
//             </span>
//             <br />
//             All in One Place
//           </h1>

//           <p className="mt-8 text-lg text-gray600 leading-8 max-w-xl">
//             Access verified notes, books, previous year papers, assignments, and
//             lab manuals uploaded by seniors. Save time and study smarter with{" "}
//             <span className="text-primary font-semibold">CampusHub</span>.
//           </p>

//           <HeroSearch />

//           <div className="mt-8 flex gap-5 flex-wrap items-center">
//             <Button onClick={() => navigate("/resources")}>
//               <Folder size={18} />
//               Browse Resources
//               <ArrowRight size={18} />
//             </Button>
//             <Button onClick={() => navigate("/upload")} variant="outline">
//               <UploadCloud size={18} />
//               Upload Resource
//             </Button>
//           </div>

//           <div className="flex gap-8 md:gap-10 mt-14 flex-wrap">
//             {stats.map(({ icon: Icon, value, label, iconBg, iconColor }) => (
//               <div key={label} className="flex flex-col">
//                 <div
//                   className={`w-14 h-14 rounded-full flex items-center justify-center mb-3 ${iconBg}`}
//                 >
//                   <Icon size={22} className={iconColor} />
//                 </div>
//                 <h2 className="text-2xl font-bold text-secondary">{value}</h2>
//                 <p className="text-gray500 text-sm">{label}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Right */}
//         <div>
//           <img
//             src={hero}
//             alt="Laptop showing the CampusHub dashboard with study resource categories, next to a stack of notes, PYQs, and textbooks on a desk"
//             className="w-full h-full object-contain"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import {
  UploadCloud,
  ArrowRight,
  ShieldCheck,
  Folder,
  FileText,
  Users,
  Landmark,
  Download,
} from "lucide-react";
import HeroSearch from "./HeroSearch";
import Button from "../../components/ui/Button";
import { useNavigate } from "react-router-dom";
import hero from "../../assets/Hero_illus.png";

const stats = [
  {
    icon: FileText,
    value: "5,000+",
    label: "Resources",
    iconBg: "bg-primaryLight",
    iconColor: "text-primary",
  },
  {
    icon: Users,
    value: "500+",
    label: "Contributors",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-500",
  },
  {
    icon: Landmark,
    value: "8",
    label: "Branches",
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    icon: Download,
    value: "10,000+",
    label: "Downloads",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-500",
  },
];

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-background py-28">
      <div className="max-w-3xl mx-auto flex px-6 md:px-8 lg:px-10 gap-16 lg:gap-20 justify-center items-center">
        {/* Left */}
        <div className="w-full mx-auto">
          <div className="inline-flex items-center gap-2 bg-primaryLight text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <ShieldCheck size={16} />
            Trusted by Engineering Students
          </div>

          <h1 className="text-xl sm:text-4xl lg:text-6xl font-heading font-bold text-secondary leading-tight">
            Find
            <span className="text-primary">
              {" "}
              Notes, PYQs
              <br />& Study Resources
            </span>
            <br />
            All in One Place
          </h1>

          <p className="mt-8 text-md text-gray600 leading-8 max-w-xl">
            Access verified notes, books, previous year papers, assignments, and
            lab manuals uploaded by seniors. Save time and study smarter with{" "}
            <span className="text-primary font-semibold">CampusHub</span>.
          </p>

          <HeroSearch />

          <div className="mt-8 flex gap-5 text-md flex-wrap items-center">
            <Button onClick={() => navigate("/resources")} className="text-sm">
              <Folder size={15} />
              Browse Resources
              <ArrowRight size={15} />
            </Button>
            <Button onClick={() => navigate("/upload")} className="text-sm" variant="outline">
              <UploadCloud size={15} />
              Upload Resource
            </Button>
          </div>

          <div className="flex w-full justify-between gap-8 md:gap-10 mt-14 flex-wrap">
            {stats.map(({ icon: Icon, value, label, iconBg, iconColor }) => (
              <div key={label} className="flex flex-col">
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center mb-3 ${iconBg}`}
                >
                  <Icon size={20} className={iconColor} />
                </div>
                <h2 className="text-xl font-bold text-secondary">{value}</h2>
                <p className="text-gray500 text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        {/* <div>
          <img
            src={hero}
            alt="Laptop showing the CampusHub dashboard with study resource categories, next to a stack of notes, PYQs, and textbooks on a desk"
            className="w-full h-auto min-h-[640px] lg:max-h-[720px] object-contain"
          />
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
