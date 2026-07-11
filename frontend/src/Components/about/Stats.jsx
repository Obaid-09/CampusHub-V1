const stats = [
    {
        value: "10K+",
        label: "Resources Shared",
    },

    {
        value: "2K+",
        label: "Students",
    },

    {
        value: "100+",
        label: "Subjects",
    },

    {
        value: "25K+",
        label: "Downloads",
    },
];

const Stats = () => {

    return (
        <section className="py-24">
            <div className="max-w-7xl mx-auto px-6">
                <div
                    className="
                        bg-secondary
                        rounded-3xl
                        py-20
                        px-10
                    "
                >
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
                        {stats.map((stat) => (
                            <div
                                key={stat.label}
                                className="text-center"
                            >
                                <h2 className="text-5xl font-bold text-primary">
                                    {stat.value}
                                </h2>
                                <p className="mt-4 text-xl text-white/80">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;