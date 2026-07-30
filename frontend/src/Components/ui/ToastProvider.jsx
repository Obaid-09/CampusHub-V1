import { Toaster } from "react-hot-toast";

const ToastProvider = () => {
  return (
    <Toaster
      position="top-right"
      reverseOrder={false}
      gutter={10}
      toastOptions={{
        duration: 3000,

        style: {
          background: "#FFFFFF",
          color: "#162f56",
          border: "1px solid #E5E7EB",
          borderRadius: "16px",
          fontWeight: "500",
          boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
        },

        success: {
          iconTheme: {
            primary: "#61CEA6",
            secondary: "#FFFFFF",
          },
        },

        error: {
          iconTheme: {
            primary: "#EF4444",
            secondary: "#FFFFFF",
          },
        },
      }}
    />
  );
};

export default ToastProvider;

