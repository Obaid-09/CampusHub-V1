import {
    Target,
    GraduationCap,
    Globe,
} from "lucide-react";

const Mission = () => {

    return (

        <section className="bg-white py-24">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <span
                            className="
                                text-primary
                                font-semibold
                                tracking-wide
                            "
                        >
                            OUR MISSION
                        </span>

                        <h2
                            className="
                                mt-4
                                text-4xl
                                font-heading
                                font-bold
                                text-secondary
                            "
                        >
                            Making Academic Resources Accessible
                        </h2>

                        <p
                            className="
                                mt-8
                                text-lg
                                leading-8
                                text-gray600
                            "
                        >
                            Engineering students spend countless hours
                            searching across WhatsApp groups, Telegram
                            channels and scattered Google Drive folders.
                            <br /><br />
                            CampusHub brings everything together into
                            one organized platform where learning
                            resources are easy to discover, share and
                            access.
                        </p>
                    </div>

                    <div className="space-y-8">
                        <div className="flex gap-5">
                            <Target
                                size={32}
                                className="text-primary mt-1"
                            />
                            <div>

                                <h3 className="text-lg font-semibold">
                                    Centralized Learning
                                </h3>

                                <p className="mt-2 text-gray600 text-[15px]">
                                    One place for Notes, PYQs,
                                    Books and Lab Manuals.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-5">
                            <GraduationCap
                                size={32}
                                className="text-primary mt-1"
                            />
                            <div>

                                <h3 className="text-xl font-semibold">
                                    Student Community
                                </h3>

                                <p className="mt-2 text-gray600 text-[15px]">
                                    Built around collaboration,
                                    knowledge sharing and growth.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-5">
                            <Globe
                                size={32}
                                className="text-primary mt-1"
                            />

                            <div>
                                <h3 className="text-xl font-semibold">
                                    Future Ready
                                </h3>

                                <p className="mt-2 text-gray600 text-[15px]">
                                    AI-powered search and intelligent
                                    study assistance coming soon.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Mission;