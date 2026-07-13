// import { useState } from "react";
// import Lamp from "./Lamp/Lamp";
// import LightCone from "./Lamp/LightCone";
// import LampGlow from "./lamp/LampGlow";
// import FloorGlow from "./lamp/FloorGlow";
// import LoginCard from "./LoginCard";
// import { AnimatePresence, motion } from "framer-motion";

// const AuthLayout = () => {

//     const [isOn, setIsOn] = useState(false);

//     return (

//         <section
//             className="
//                 min-h-screen
//                 bg-[#111111]
//                 overflow-hidden
//             "
//         >

//             <div
//                 className="
//                     max-w-7xl
//                     mx-auto
//                     min-h-screen
//                     px-6
//                     py-16
//                     grid
//                     lg:grid-cols-2
//                     items-center
//                     gap-16
//                 "
//             >
//                 {/* Lamp */}
//                 <div
//                     className="
//                         relative
//                         flex
//                         justify-center
//                     "
//                 >

//                     <LampGlow isOn={isOn} />
//                     <Lamp
//                         isOn={isOn}
//                         setIsOn={setIsOn}
//                     />
//                     <LightCone
//                         isOn={isOn}
//                     />
//                     <FloorGlow isOn={isOn} />
//                 </div>

//                 {/* Login Card */}
//                 <div className="flex items-center justify-center">
//                     <AnimatePresence mode="wait">
//                         {isOn && (
//                             <motion.div
//                                 initial={{
//                                     opacity: 0,
//                                     x: 120,
//                                     scale: 0.95,
//                                 }}
//                                 animate={{
//                                     opacity: 1,
//                                     x: 0,
//                                     scale: 1,
//                                 }}
//                                 exit={{
//                                     opacity: 0,
//                                     x: 120,
//                                     scale: 0.95,
//                                 }}
//                                 transition={{
//                                     duration: 0.45,
//                                 }}
//                             >
//                                <LoginCard isOn={isOn} />
//                             </motion.div>
//                         )}
//                     </AnimatePresence>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default AuthLayout;


import { useState } from "react";

import Lamp from "./lamp/Lamp";
import LampGlow from "./lamp/LampGlow";
import LightCone from "./lamp/LightCone";
import FloorGlow from "./lamp/FloorGlow";

const AuthLayout = ({ children }) => {

    const [isOn, setIsOn] = useState(false);

    return (

        <section
            className={`
                min-h-screen
                transition-all
                duration-500

                ${
                    isOn
                        ? "bg-[#111111]"
                        : "bg-black"
                }
            `}
        >

            <div
                className="
                    max-w-7xl
                    mx-auto

                    px-6
                    py-20

                    grid
                    lg:grid-cols-2

                    items-center

                    gap-16
                "
            >

                {/* Lamp */}

                <div
                    className="
                        relative

                        flex
                        justify-center
                        items-center

                        min-h-[650px]
                    "
                >

                    <LampGlow
                        isOn={isOn}
                    />

                    <Lamp
                        isOn={isOn}
                        setIsOn={setIsOn}
                    />

                    <LightCone
                        isOn={isOn}
                    />

                    <FloorGlow
                        isOn={isOn}
                    />

                    <p
                        className="
                            absolute
                            bottom-0

                            text-gray400

                            text-sm
                        "
                    >

                        {isOn
                            ? "Welcome Back 👋"
                            : "Pull the chain to begin"}

                    </p>

                </div>

                {/* Form */}

                <div
                    className="
                        flex
                        justify-center
                        items-center

                        min-h-[650px]
                    "
                >

                    {children(isOn)}

                </div>

            </div>

        </section>

    );

};

export default AuthLayout;