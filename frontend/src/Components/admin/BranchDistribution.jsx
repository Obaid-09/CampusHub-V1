import {

    ResponsiveContainer,

    PieChart,

    Pie,

    Cell,

    Tooltip,

} from "recharts";



import { branchDistribution } from "../../constants/admin";

const COLORS = [

    "#D97706",

    "#2563EB",

    "#16A34A",

    "#9333EA",

    "#EF4444",

];

const BranchDistribution = () => {

    return (

        <div
            className="
                grid
                lg:grid-cols-2
                gap-6
                items-center
            "
        >

            <ResponsiveContainer
                width="100%"
                height={320}
            >

                <PieChart>

                    <Pie

                        data={branchDistribution}

                        dataKey="value"

                        nameKey="name"

                        outerRadius={110}

                    >

                        {

                            branchDistribution.map((entry,index)=>(

                                <Cell

                                    key={index}

                                    fill={COLORS[index]}

                                />

                            ))

                        }

                    </Pie>

                    <Tooltip/>

                </PieChart>

            </ResponsiveContainer>

            <div className="space-y-4">

                {

                    branchDistribution.map((branch,index)=>(

                        <div

                            key={branch.name}

                            className="
                                flex
                                items-center
                                justify-between
                            "

                        >

                            <div
                                className="
                                    flex
                                    items-center
                                    gap-3
                                "
                            >

                                <div

                                    className="w-4 h-4 rounded-full"

                                    style={{
                                        backgroundColor: COLORS[index]
                                    }}

                                />

                                <span className="font-medium">

                                    {branch.name}

                                </span>

                            </div>

                            <span className="text-gray500">

                                {branch.value}%

                            </span>

                        </div>

                    ))

                }

            </div>

        </div>

    );

};

export default BranchDistribution;