import { ArrowRight, Upload } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";

const AboutHero = () => {

    const navigate = useNavigate();
    return (
        <section className="bg-background py-28">
            <div className="max-w-5xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left */}
                    <div>
                        <div
                            className="
                                inline-flex
                                items-center
                                px-4
                                py-2
                                rounded-full
                                bg-primaryLight
                                text-primary
                                font-medium
                                mb-8
                            "
                        >
                            🚀 Empowering Engineering Students
                        </div>

                        <h1
                            className="
                                text-3xl
                                lg:text-5xl
                                font-heading
                                font-bold
                                text-secondary
                                leading-tight
                            "
                        >
                            Built by
                            <span className="text-primary">
                                {" "}Students
                            </span>
                            <br />
                            Designed for
                            <span className="text-primary">
                                {" "}Students
                            </span>
                        </h1>

                        <p
                            className="
                                mt-8
                                text-lg
                                leading-7
                                text-gray600
                                max-w-xl
                            "
                        >
                            CampusHub is a collaborative platform where
                            engineering students can discover, upload,
                            and share quality academic resources in one place.
                        </p>

                        <div className="flex gap-5 mt-10 text-md flex-wrap">
                            <Button
                                onClick={() => navigate("/resources")}
                                className="text-sm"
                            >
                                Explore Resources
                                <ArrowRight size={15}/>
                            </Button>
                            <Button
                                variant="outline"
                                onClick={() => navigate("/upload")}
                                className="text-sm"
                            >
                                <Upload size={15}/>
                                Upload Resource
                            </Button>
                        </div>
                    </div>

                    {/* Right */}
                    <div className="flex justify-center">
                        <img
                            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800"
                            alt="Students"
                            className="
                                rounded-3xl
                                shadow-2xl
                                object-cover
                                h-[450px]
                            "
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutHero;