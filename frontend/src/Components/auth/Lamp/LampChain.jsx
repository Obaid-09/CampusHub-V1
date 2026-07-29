import { motion } from "framer-motion";

const LampChain = ({ isOn, setIsOn }) => {
  return (
    <motion.div
      whileTap={{
        y: 18,
      }}
      onClick={() => setIsOn(!isOn)}
      className="
                absolute
                top-[3rem]
                right-8
                cursor-pointer
                flex
                flex-col
                items-center
                z-30
            "
    >
      <div className="w-[2px] h-24 bg-yellow-100" />

      <div
        className="
                    w-5
                    h-5
                    rounded-full
                    bg-yellow-300
                "
      />
    </motion.div>
  );
};

export default LampChain;
