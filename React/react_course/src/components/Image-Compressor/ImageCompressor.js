import React, { useState } from "react";
import imageCompression from "browser-image-compression";
import "./ImageCompressor.css";

const ImageCompressor = () => {
  // Orignal Image state variables
  const [origImage, setOrigImage] = useState("");
  const [origImageFile, setOrigImageFile] = useState("");

  // Compressed Image state variables

  const [compressedImage, setCompressedImage] = useState("");
  const [fileName, setFileName] = useState("");

  const handleChange = (e) => {
    // console.log("clicked")
    const imageFile = e.target.files[0];
    console.log(imageFile);
    setOrigImage(imageFile);
    setOrigImageFile(URL.createObjectURL(imageFile));

    setFileName(imageFile.name);
  };

  const handleCompressImage = (e) => {
    e.preventDefault();
    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 500,
      useWebWorker: true,
    };

    let output;
    imageCompression(origImage, options).then((compressedImage) => {
      output = compressedImage;

      const downloadLink = URL.createObjectURL(output);
      setCompressedImage(downloadLink);
    });
  };

  return (
    <div className="container">
      <h1>Image Compression Project</h1>
      <div className="row">
        <div className="col">
          {origImageFile ? (
            <img src={origImageFile} alt="pic" className="original-image" />
          ) : (
            <img
              src="./images/image-icon.png"
              alt="no-pic-selected"
              className="rounded float-start original-image"
            />
          )}
        </div>

        <div className="col">
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleChange(e)}
          />
          <button
            className="btn btn-primary"
            onClick={(e) => handleCompressImage(e)}
          >
            Compress Image
          </button>
          <br />
          <a
            href={compressedImage}
            download={fileName}
            className="btn btn-primary"
            tabindex="-1"
            role="button"
            aria-disabled="true"
          >
            Download Image
          </a>
        </div>

        <div className="col">
          {compressedImage ? (
            <img
              src={compressedImage}
              className="rounded float-end compressed-image"
              alt="..."
            />
          ) : (
            <img
              src="./images/image-icon.png"
              className="rounded float-end compressed-image"
              alt="..."
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageCompressor;
