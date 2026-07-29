const Modal = ({ open, onClose, children }) => {
  if (!open) return null;

  return (
    <div
      className="
        fixed
        inset-0
        z-50
        bg-black/40
        overflow-y-auto
        p-4
      "
      onClick={onClose}
    >
      <div
        className="
          min-h-full
          flex
          items-center
          justify-center
        "
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="
            bg-white
            rounded-2xl
            shadow-xl
            w-full
            max-w-lg
            max-h-[90vh]
            overflow-y-auto
            p-6
          "
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
