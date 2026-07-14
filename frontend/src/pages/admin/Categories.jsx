import { useState } from "react";

import AdminLayout from "../../components/admin/AdminLayout";
import CategoryTabs from "../../components/admin/CategoryTabs";
import CategoryToolbar from "../../Components/admin/CategoryToolbar";
import CategoryTable from "../../components/admin/CategoryTable";
import EditCategoryModal from "../../Components/admin/EditCategoryModal";
import DeleteCategoryModal from "../../Components/admin/DeleteCategoryModal";
import AddCategoryModal from "../../Components/admin/AddCategoryModal";

import {

    categoryTabs,

    categoryData,

} from "../../constants/categories";


const Categories = () => {

    const [active, setActive] = useState("Branches");
    const [search,setSearch]=useState("");
    const [showAdd,setShowAdd]=useState(false);

    const [showEdit,setShowEdit]=useState(false);

    const [showDelete,setShowDelete]=useState(false);

    const [selectedCategory,setSelectedCategory]=useState(null);

    const filteredData = categoryData[active].filter(item=>

        item.toLowerCase().includes(search.toLowerCase())

    );
    return (

        <AdminLayout>

            <div className="space-y-8">

                <div>

                    <h1
                        className="
                            text-4xl
                            font-heading
                            font-bold
                            text-secondary
                        "
                    >

                        Categories

                    </h1>

                    <p className="mt-2 text-gray600">

                        Manage branches, semesters, subjects and resource types.

                    </p>

                </div>

                <CategoryToolbar

                    search={search}

                    setSearch={setSearch}

                    onAdd={()=>setShowAdd(true)}

                />

                <CategoryTabs

                    tabs={categoryTabs}

                    active={active}

                    setActive={setActive}

                />

                <CategoryTable

                    data={filteredData}

                    onEdit={(item)=>{

                        setSelectedCategory(item);

                        setShowEdit(true);

                    }}

                    onDelete={(item)=>{

                        setSelectedCategory(item);

                        setShowDelete(true);

                    }}

                />

                <AddCategoryModal

                    open={showAdd}

                    onClose={()=>setShowAdd(false)}

                    onSave={(name)=>{

                        console.log(name);

                        setShowAdd(false);

                    }}

                />

                <EditCategoryModal

                    open={showEdit}

                    value={selectedCategory}

                    onClose={()=>setShowEdit(false)}

                    onSave={(value)=>{

                        console.log(value);

                        setShowEdit(false);

                    }}

                />

                <DeleteCategoryModal

                    open={showDelete}

                    category={selectedCategory}

                    onClose={()=>setShowDelete(false)}

                    onDelete={()=>{

                        console.log(selectedCategory);

                        setShowDelete(false);

                    }}

                />

            </div>

        </AdminLayout>

    );

};

export default Categories;