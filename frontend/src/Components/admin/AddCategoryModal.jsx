import { useState } from "react";
import Button from "../ui/Button";
import Input from "../ui/Input";

const AddCategoryModal = ({
    open,
    onClose,
    onSave,
}) => {

    const [name,setName]=useState("");

    if(!open) return null;

    return(

        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">

            <div className="bg-white rounded-3xl p-8 w-full max-w-md">

                <h2 className="text-2xl font-heading font-bold text-secondary">

                    Add Category

                </h2>

                <div className="mt-6">

                    <Input
                        label="Category Name"
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                    />

                </div>

                <div className="flex justify-end gap-3 mt-8">

                    <Button
                        variant="outline"
                        onClick={onClose}
                    >
                        Cancel
                    </Button>

                    <Button
                        onClick={()=>{

                            onSave(name);

                            setName("");

                        }}
                    >
                        Save
                    </Button>

                </div>

            </div>

        </div>

    );

};

export default AddCategoryModal;
