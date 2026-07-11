import Button from "../ui/Button";
import { ArrowRight, Upload } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CTA = () => {

    const navigate = useNavigate();

    return (

        <section className="py-28">

            <div className="max-w-6xl mx-auto px-6">

                <div
                    className="
                        bg-secondary
                        rounded-3xl
                        p-14
                        text-center
                    "
                >

                    <h2
                        className="
                            text-5xl
                            lg:text-6xl
                            font-heading
                            font-bold
                            text-white
                        "
                    >
                        Ready to Help Thousands
                        <br />
                        of Students?
                    </h2>

                    <p
                        className="
                            mt-8
                            text-xl
                            leading-9
                            text-white/80
                            max-w-3xl
                            mx-auto
                        "
                    >
                        Share your notes, previous year papers,
                        books and study materials to contribute
                        towards a stronger learning community.
                    </p>

                    <div
                        className="
                            flex
                            justify-center
                            gap-5
                            mt-10
                            flex-wrap
                        "
                    >

                        <Button
                            onClick={() =>
                                navigate("/upload")
                            }
                        >
                            <Upload size={18}/>

                            Upload Resource

                        </Button>

                        <Button
                            variant="outline"
                            className="bg-white"
                            onClick={() =>
                                navigate("/resources")
                            }
                        >
                            Explore Resources

                            <ArrowRight size={18}/>
                        </Button>

                    </div>

                </div>

            </div>

        </section>

    );

};

export default CTA;