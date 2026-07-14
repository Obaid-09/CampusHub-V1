import { useEffect,useState } from "react";
import Button from "../ui/Button";
import Input from "../ui/Input";

const EditCategoryModal = ({
    open,
    onClose,
    value,
    onSave,
}) => {

    const [name,setName]=useState("");

    useEffect(()=>{

        setName(value||"");

    },[value]);

    if(!open) return null;

    return(

        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">

            <div className="bg-white rounded-3xl p-8 w-full max-w-md">

                <h2 className="text-2xl font-heading font-bold">

                    Edit Category

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
                        onClick={()=>onSave(name)}
                    >
                        Save Changes
                    </Button>

                </div>

            </div>

        </div>

    );

};

export default EditCategoryModal;