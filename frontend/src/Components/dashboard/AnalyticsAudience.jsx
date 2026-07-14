const audience = [

    {
        label:"CSE",
        value:"52%",
    },

    {
        label:"ECE",
        value:"21%",
    },

    {
        label:"EEE",
        value:"17%",
    },

    {
        label:"Mechanical",
        value:"10%",
    },

];

const AnalyticsAudience = () => {

    return (

        <div className="bg-white rounded-2xl shadow-card border border-gray100 p-6">

            <h2 className="text-xl font-heading font-bold text-secondary">

                Audience

            </h2>

            <div className="space-y-6 mt-8">

                {audience.map((item)=>(

                    <div
                        key={item.label}
                        className="flex justify-between"
                    >

                        <span>

                            {item.label}

                        </span>

                        <span className="font-semibold text-primary">

                            {item.value}

                        </span>

                    </div>

                ))}

            </div>

        </div>

    );

};

export default AnalyticsAudience;