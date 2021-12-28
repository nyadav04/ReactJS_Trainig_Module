import React,{useState} from 'react';
import imageCompression from 'browser-image-compression'
import {Button,Modal} from 'react-bootstrap'
const Compressor = () => {
    const [originalImage, setOriginalImage] = useState('')
    const [originalFile, setOriginalFile] = useState('')
    const [finalImage, setFinalImage] = useState('')
    const [compressedFile, setCompressedFile] = useState('');

    const handleInput=(e)=>{
        const image = e.target.files[0];
        setOriginalImage(URL.createObjectURL(image))
        setOriginalFile(image)
    }
    function handleCompress(event) {
        // console.log('originalFile instanceof Blob', originalFile instanceof Blob); // true
        // console.log(`originalFile size ${originalFile.size / 1024 / 1024} MB`);
      
        var options = {
          maxSizeMB: 1,
          maxWidthOrHeight: 1620,
          useWebWorker: true
        }
        if(options.maxSizeMB>=originalFile.size){
            alert("Image is to small");
           
        }
        else{
             imageCompression(originalFile, options)
                .then(function (compressedFile) {
                // console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
                // console.log(`compressedFile size ${compressedFile.size / 1024 / 1024} MB`); // smaller than maxSizeMB

                setCompressedFile(compressedFile)
                setFinalImage(URL.createObjectURL(compressedFile))
                })
                .catch(function (error) {
                console.log(error.message);
                });
        }
    }
    return(
        <div>
            <h1>Image Compressor</h1>
            <input type='file'  onChange={handleInput}/>
            <Button className="btn btn-primary" onClick={handleCompress}>Compress</Button>
            {originalImage ?
            <div>
            <img src={originalImage}/><h5>original</h5>
            </div>:""}
             {finalImage ?
             <div>
             <img src={finalImage}/><h5>compressed</h5>
             </div>:""}
        </div>
    )
};

export default Compressor;