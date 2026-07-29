const UploadProgress = ({ progress }) => {
  return (
    <div className="bg-white rounded-2xl shadow-card p-6">
      <h3 className="font-semibold text-secondary">Uploading...</h3>

      <div
        className="
                    mt-5
                    h-3
                    bg-gray100
                    rounded-full
                    overflow-hidden
                "
      >
        <div
          className="bg-primary h-full transition-all"
          style={{
            width: `${progress}%`,
          }}
        />
      </div>
      <p className="mt-3 text-gray500">{progress}%</p>
    </div>
  );
};

export default UploadProgress;
