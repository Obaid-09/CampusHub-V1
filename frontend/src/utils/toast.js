import toast from "react-hot-toast";

export const successToast = (message) => {

    toast.success(message);

};

export const errorToast = (message) => {

    toast.error(message);

};

export const loadingToast = (message) => {

    return toast.loading(message);

};

export const dismissToast = (id) => {

    toast.dismiss(id);

};

export const customToast = (message) => {

    toast(message);

};

export const promiseToast = (

    promise,

    {

        loading,

        success,

        error,

    }

) => {

    return toast.promise(

        promise,

        {

            loading,

            success,

            error,

        }

    );

};