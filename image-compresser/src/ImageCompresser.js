import React, { useState } from "react";
import Compress from "browser-image-compression";

function ImageCompresser() {
  const [fileName, setFileName] = useState("");
  const [compressedFileName, setCompressedFileName] = useState("");
  const [uploadedSize, setUploadedSize] = useState("");
  const [compressedSize, setCompressedSize] = useState("");

  const onChange = (e) => {
    const file = e.target.files[0];

    var reader = new FileReader();
    reader.onload = function (e) {
      setFileName(e.target.result);
    };
    reader.readAsDataURL(file);

    const options = {
      maxSizeMB: 1.5,
      useWebWorker: true,
    };
    let size=(file.size/1024/1024).toFixed(3);
    setUploadedSize(size);

    Compress(file, options)
      .then((compressedBlob) => {
        var reader = new FileReader();
        reader.onload = function (e) {
          setCompressedFileName(e.target.result);
        };
        reader.readAsDataURL(compressedBlob);

        let size=(compressedBlob.size/1024/1024).toFixed(3);
        setCompressedSize(size);

        compressedBlob.lastModifiedDate = new Date();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="app">
      <h1>React Image Compresser</h1>
      <div className="container">
        <input
          name="file"
          id="file"
          onChange={onChange}
          type="file"
          accept="image/*"
        />
        <div className="row">
          <div className="col-lg-6">
            <div>
              {fileName ? (
                <>
                  <img src={fileName} alt="" id="uploadedImage" />
                  <h3>Uploaded Image</h3>
                  <h4>{uploadedSize} MB</h4>
                </>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="col-lg-6">
            <div>
              {compressedFileName ? (
                <>
                  <img src={compressedFileName} alt="" id="uploadedImage" />
                  <h3>Compressed Image</h3>
                  <h4>{compressedSize} MB</h4>
                </>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageCompresser;
