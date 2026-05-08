import { useState } from "react";
import { fileUpload } from "../services/multerFileUpload";

const MulterFileUpload = () => {
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) return;

    try {
      setIsUploading(true);

      const data = await fileUpload(file, setProgress);

      console.log(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
      <p>{progress}%</p>

      {isUploading && <p>Uploading...</p>}
      <progress value={progress} max="100"></progress>
    </div>
  );
};

export default MulterFileUpload;
