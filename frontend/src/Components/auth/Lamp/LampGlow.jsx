import { motion } from "framer-motion";

const LampGlow = ({ isOn }) => {
    return (
        <motion.div
            animate={{
                opacity: isOn ? 1 : 0,
                scale: isOn ? 1 : 0.7,
            }}
            transition={{ duration: 0.3 }}
            className="
                absolute
                top-10
                left-1/2
                -translate-x-1/2
                w-36
                h-36
                rounded-full
                bg-yellow-300/30
                blur-3xl
                z-0
            "
        />
    );
};

export default LampGlow;