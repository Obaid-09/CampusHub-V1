import LampShade from "./LampShade";
import LampBulb from "./LampBulb";
import LampChain from "./LampChain";

const Lamp = ({ isOn, setIsOn }) => {
    return (

            <div
            className="
                relative
                flex
                flex-col
                 items-center
                 z-20
             "
        >
            <LampShade isOn={isOn} />

            <LampBulb isOn={isOn} />

             {/* Stand */}

            <div className="w-[4px] h-72 bg-neutral-500" />

           {/* Base */}

                <div className="w-28 h-3 rounded-full bg-neutral-600" />

            <LampChain
                isOn={isOn}
                setIsOn={setIsOn}
            />
            
         </div>
    );
};

export default Lamp;
