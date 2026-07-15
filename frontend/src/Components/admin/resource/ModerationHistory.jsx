import { moderationHistory } from "../../../constants/admin";

import ModerationRow from "./ModerationRow";

const ModerationHistory = () => {

    return (

        <div

            className="
                bg-white
                rounded-2xl
                shadow-card
                border
                border-gray100
                overflow-hidden
            "

        >

            <div className="p-6">

                <h2

                    className="
                        text-2xl
                        font-bold
                        text-secondary
                    "

                >

                    Moderation History

                </h2>

            </div>

            <table className="w-full">

                <thead>

                    <tr className="border-y border-gray100">

                        <th className="py-4 text-left px-6">

                            Action

                        </th>

                        <th>

                            By

                        </th>

                        <th>

                            Date

                        </th>

                    </tr>

                </thead>

                <tbody>

                    {

                        moderationHistory.map(history=>(

                            <ModerationRow

                                key={history._id}

                                history={history}

                            />

                        ))

                    }

                </tbody>

            </table>

        </div>

    );

};

export default ModerationHistory;