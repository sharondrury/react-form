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
          // Show uploaded images when files exist
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
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7,10 12,15 17,10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <p>Drag and drop or click to upload</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Dropzone;
