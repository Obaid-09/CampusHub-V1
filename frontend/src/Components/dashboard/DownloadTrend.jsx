const data = [30,55,40,70,90,120,110];

const DownloadTrend = ({
    title = "Downloads Trend",
}) => {

    const max = Math.max(...data);

    return (

        <div className="bg-white rounded-2xl shadow-card border border-gray100 p-6">

            <h2 className="text-xl font-heading font-bold text-secondary">

                {title}

            </h2>

            <div className="mt-8 flex items-end justify-between h-48">

                {data.map((value,index)=>(

                    <div
                        key={index}
                        className="flex flex-col items-center gap-2"
                    >

                        <div

                            style={{
                                height:`${(value/max)*160}px`,
                            }}

                            className="
                                w-8
                                rounded-t-lg
                                bg-primary
                            "

                        />

                        <span className="text-xs text-gray500">

                            W{index+1}

                        </span>

                    </div>

                ))}

            </div>

        </div>

    );

};

export default DownloadTrend;