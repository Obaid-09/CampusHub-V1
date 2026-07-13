import { motion } from "framer-motion";

const FloorGlow = ({ isOn }) => {
    return (
        <motion.div
            animate={{
                opacity: isOn ? 1 : 0,
                scaleX: isOn ? 1 : 0.5,
            }}
            transition={{ duration: 0.4 }}
            className="
                absolute
                bottom-6
                left-1/2
                -translate-x-1/2

                w-[380px]
                h-16

                rounded-full
                bg-yellow-200/15
                blur-3xl
            "
        />
    );
};

export default FloorGlow;