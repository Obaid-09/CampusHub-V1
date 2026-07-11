import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [

    {
        question: "Who can upload resources?",
        answer:
            "Any registered student can upload notes, books, lab manuals, assignments and previous year papers. Resources are reviewed before becoming publicly available."
    },

    {
        question: "Is CampusHub free to use?",
        answer:
            "Yes. CampusHub is completely free for students. You can browse, search and download academic resources without any subscription."
    },

    {
        question: "Can I bookmark resources?",
        answer:
            "Yes. After signing in, you can bookmark resources and access them anytime from your dashboard."
    },

    {
        question: "Are uploaded resources verified?",
        answer:
            "Yes. Every uploaded resource is reviewed to ensure quality, correct categorization and relevance before it becomes publicly visible."
    },

    {
        question: "Will AI features be available?",
        answer:
            "Yes. Future versions will include AI-powered semantic search, RAG-based study assistance and personalized recommendations."
    },

];

const FAQ = () => {

    const [open, setOpen] = useState(0);

    return (

        <section className="py-24 bg-background">

            <div className="max-w-5xl mx-auto px-6">

                <div className="text-center">

                    <h2
                        className="
                            text-5xl
                            font-heading
                            font-bold
                            text-secondary
                        "
                    >
                        Frequently Asked Questions
                    </h2>

                    <p className="mt-5 text-xl text-gray600">

                        Everything you need to know about CampusHub.

                    </p>

                </div>

                <div className="mt-16 space-y-5">

                    {faqs.map((faq, index) => (

                        <div
                            key={faq.question}
                            className="
                                bg-white
                                rounded-2xl
                                shadow-card
                            "
                        >

                            <button
                                onClick={() =>
                                    setOpen(
                                        open === index
                                            ? -1
                                            : index
                                    )
                                }
                                className="
                                    w-full
                                    p-6
                                    flex
                                    justify-between
                                    items-center
                                "
                            >

                                <h3
                                    className="
                                        text-2xl
                                        font-semibold
                                        text-secondary
                                        text-left
                                    "
                                >
                                    {faq.question}
                                </h3>

                                <ChevronDown
                                    className={`transition-transform ${
                                        open === index
                                            ? "rotate-180"
                                            : ""
                                    }`}
                                />

                            </button>

                            {open === index && (

                                <div
                                    className="
                                        px-6
                                        pb-6
                                        text-lg
                                        leading-8
                                        text-gray600
                                    "
                                >

                                    {faq.answer}

                                </div>

                            )}

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );

};

export default FAQ;