import { AnimatePresence, motion } from "framer-motion";

const AuthCard = ({ isOn, children }) => {
  return (
    <AnimatePresence mode="wait">
      {isOn && (
        <motion.div
          initial={{
            opacity: 0,
            x: 80,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            x: 80,
            scale: 0.9,
          }}
          transition={{
            duration: 0.45,
            ease: "easeOut",
          }}
          className="
                        w-full
                        max-w-md

                        rounded-3xl

                        bg-white/10
                        backdrop-blur-xl

                        border
                        border-white/10

                        shadow-[0_25px_80px_rgba(0,0,0,.45)]

                        p-8
                    "
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AuthCard;
