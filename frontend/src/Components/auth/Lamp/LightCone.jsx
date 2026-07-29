import { motion } from "framer-motion";

const LightCone = ({ isOn }) => {
  return (
    <motion.div
      animate={{
        opacity: isOn ? 1 : 0,
        scaleY: isOn ? 1 : 0.8,
      }}
      transition={{
        duration: 0.45,
      }}
      className="
                    absolute
                    top-[10rem]
                    -translate-x-1/2

                    w-[650px]
                    h-[650px]

                    bg-gradient-to-b
                    from-yellow-200/45
                    via-yellow-100/12
                    to-transparent

                    blur-sm

                    [clip-path:polygon(48%_0%,52%_0%,100%_100%,0_100%)]
                    "
    />
  );
};

export default LightCone;
