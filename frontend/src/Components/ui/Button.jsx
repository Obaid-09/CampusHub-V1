import { Loader2 } from "lucide-react";

const variants = {
  primary: "bg-primary text-white hover:bg-primaryHover shadow-button",

  secondary: "bg-secondary text-white hover:bg-secondaryLight",

  outline:
    "border border-primary text-primary hover:bg-primary hover:text-white",

  danger: "bg-danger text-white hover:bg-red-700",

  ghost: "text-secondary hover:bg-gray100",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

const Button = ({
  children,
  type = "button",
  variant = "primary",
  size = "md",
  loading = false,
  disabled = false,
  className = "",
  ...props
}) => {
  return (
    <button
      type={type}
      disabled={disabled || loading}
      className={`
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-lg
                font-medium
                transition-all
                duration-300
                disabled:opacity-50
                disabled:cursor-not-allowed
                ${variants[variant]}
                ${sizes[size]}
                ${className}
            `}
      {...props}
    >
      {loading && <Loader2 size={18} className="animate-spin" />}
      {children}
    </button>
  );
};

export default Button;
