const ModerationRow = ({
    history,
}) => {

    return (

        <tr className="border-b border-gray100">

            <td className="py-4">

                {history.action}

            </td>

            <td>

                {history.by}

            </td>

            <td>

                {history.date}

            </td>

        </tr>

    );

};

export default ModerationRow;