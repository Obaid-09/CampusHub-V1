import CategoryRow from "./CategoryRow";

const CategoryTable = ({
    data,
    onEdit,
    onDelete
}) => {

    return (

        <div
            className="
                bg-white
                rounded-2xl
                shadow-card
                overflow-hidden
            "
        >

            <table className="w-full">

                <thead>

                    <tr className="border-b">

                        <th className="px-6 py-5 text-left">

                            Name

                        </th>

                        <th className="text-left">

                            Created By

                        </th>

                        <th className="text-left">

                            Created At

                        </th>

                        <th className="text-left">

                            Actions

                        </th>

                    </tr>

                </thead>

                <tbody>

                    {

                        data.map(item=>(

                            <CategoryRow

                                key={item}

                                item={item}

                                onEdit={onEdit}

                                onDelete={onDelete}

                            />

                        ))

                    }

                </tbody>

            </table>

        </div>

    );

};

export default CategoryTable;