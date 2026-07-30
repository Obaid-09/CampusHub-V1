import { useState } from "react";
import Lamp from "./Lamp/Lamp";
import LampGlow from "./Lamp/LampGlow"
import LightCone from "./Lamp/LightCone";
import FloorGlow from "./Lamp/FloorGlow";

const AuthLayout = ({ children }) => {
  const [isOn, setIsOn] = useState(false);

  return (
    <section
      className={`
                min-h-screen
                transition-all
                duration-500

                ${isOn ? "bg-[#111111]" : "bg-black"}
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
          <LampGlow isOn={isOn} />

          <Lamp isOn={isOn} setIsOn={setIsOn} />

          <LightCone isOn={isOn} />

          <FloorGlow isOn={isOn} />

          <p
            className="
                            absolute
                            bottom-0

                            text-gray400

                            text-sm
                        "
          >
            {isOn ? "Welcome Back 👋" : "Pull the chain to begin"}
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
