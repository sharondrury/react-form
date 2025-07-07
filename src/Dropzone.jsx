import { useState } from "react";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

const Dropzone = ({ className, onFilesChange }) => {
  const [files, setFiles] = useState([]);

  const onDrop = useCallback(
    (acceptedFiles) => {
      if (acceptedFiles?.length) {
        // Clean up previous file URLs to prevent memory leaks
        files.forEach((file) => {
          if (file.preview) {
            URL.revokeObjectURL(file.preview);
          }
        });

        // Replace all files with the new ones
        const newFiles = acceptedFiles.map((file) =>
          Object.assign(file, { preview: URL.createObjectURL(file) })
        );

        setFiles(newFiles);

        // Pass the files back to parent component
        if (onFilesChange) {
          onFilesChange(newFiles);
        }
      }
    },
    [files, onFilesChange]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [],
    },
  });

  return (
    <>
      <p className="title">Upload Avatar</p>
      <div {...getRootProps()} className={className}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : files.length > 0 ? (
          <div>
            {files.map((file) => (
              <div key={file.name}>
                <img
                  className="preview-image"
                  src={file.preview}
                  alt="Your image"
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="dropzone-placeholder">
            <div className="upload-image"></div>
            <p>Drag and drop or click to upload</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Dropzone;
