const CategoryTabs = ({
    tabs,
    active,
    setActive,
}) => {

    return (

        <div
            className="
                flex
                flex-wrap
                gap-3
            "
        >

            {

                tabs.map(tab=>(

                    <button

                        key={tab}

                        onClick={()=>setActive(tab)}

                        className={`

                            px-5

                            py-3

                            rounded-xl

                            font-medium

                            transition-all

                            ${
                                active===tab

                                ?

                                "bg-primary text-white"

                                :

                                "bg-white border border-gray100 text-secondary"

                            }

                        `}
                    >

                        {tab}

                    </button>

                ))

            }

        </div>

    );

};

export default CategoryTabs;
