import { useState } from "react";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

const Dropzone = ({ className }) => {
  const [files, setFiles] = useState([]);

  const onDrop = useCallback(
    (acceptedFiles) => {
      // this will add each image not replace https://www.youtube.com/watch?v=eGVC8UUqCBE
      //   if (acceptedFiles?.length) {
      //     setFiles((previousFiles) => [
      //       ...previousFiles,
      //       ...acceptedFiles.map((file) =>
      //         Object.assign(file, { preview: URL.createObjectURL(file) })
      //       ),
      //     ]);
      //   }
      // }, []);

      if (acceptedFiles?.length) {
        // Clean up previous file URLs to prevent memory leaks
        files.forEach((file) => {
          if (file.preview) {
            URL.revokeObjectURL(file.preview);
          }
        });

        // Replace all files with the new ones
        setFiles(
          acceptedFiles.map((file) =>
            Object.assign(file, { preview: URL.createObjectURL(file) })
          )
        );
      }
    },
    [files]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [],
    },
  });

  return (
    <form>
      <div {...getRootProps()} className={className}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
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
        )}
      </div>
      {/* <ul>
        {files.map((file) => (
          <li key={file.name}>
            <img
              className="preview-image"
              src={file.preview}
              alt="Your image"
            />
          </li>
        ))}
      </ul> */}
    </form>
  );
};

export default Dropzone;
