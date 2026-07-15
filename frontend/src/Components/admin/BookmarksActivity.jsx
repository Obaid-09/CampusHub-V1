import { bookmarks } from "../../constants/admin";

const BookmarksActivity = () => {

    return (

        <div

            className="
                bg-white
                rounded-2xl
                border
                border-gray100
                shadow-card
                p-6
            "

        >

            <h2

                className="
                    text-xl
                    font-bold
                    text-secondary
                    mb-5
                "

            >

                Bookmarks

            </h2>

            <div className="space-y-4">

                {

                    bookmarks.map(bookmark => (

                        <p key={bookmark.id}>

                            {bookmark.title}

                        </p>

                    ))

                }

            </div>

        </div>

    );

};

export default BookmarksActivity;