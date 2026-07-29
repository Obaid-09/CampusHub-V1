import { AnimatePresence, motion } from "framer-motion";
import LoginForm from "./LoginForm";

const LoginCard = ({ isOn }) => {
  return (
    <AnimatePresence>
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
          }}
          className="
                        w-[100%]
                        max-w-[28rem]
                        md:w-[120%]
                        md:max-w-[32rem]
                        rounded-3xl
                        bg-white/10
                        backdrop-blur-xl
                        border
                        border-white/20
                        shadow-2xl
                        p-8
                        top-10
                    "
        >
          <LoginForm />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoginCard;
