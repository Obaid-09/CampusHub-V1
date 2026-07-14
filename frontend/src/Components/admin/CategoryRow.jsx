import Button from "../ui/Button";

const CategoryRow = ({
    item,
    onEdit,
    onDelete
}) => {

    return (

        <tr className="border-b last:border-none">

            <td className="px-6 py-5">

                {item}

            </td>

            <td>

                Admin

            </td>

            <td>

                Today

            </td>

            <td>

                <div className="flex gap-3">

                    <Button
                        size="sm"
                        variant="outline"
                        onClick={()=>onEdit(item)}
                    >

                        Edit

                    </Button>

                    <Button
                        size="sm"
                        variant="danger"
                        onClick={()=>onDelete(item)}
                    >

                        Delete

                    </Button>

                </div>

            </td>

        </tr>

    );

};

export default CategoryRow;