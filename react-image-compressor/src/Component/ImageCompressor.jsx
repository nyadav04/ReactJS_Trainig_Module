import React, { useState } from 'react'
import imageCompression from 'browser-image-compression'
import './ImageCompressor.css';
import loading from "../assets/loading.gif";
import styledComponenet from "styled-components";
const CompressButton=styledComponenet.button`
background-color: crimson ;
color:white;
padding: 5px 10px;
border-radius: 10px;
outline:none
`;
const HeadingTitle=styledComponenet.h1`
font-size:42px;
color:crimson;
font-weight:600;
`;

export default function ImageCompressor () {
  const [originalImage, setOriginalImage] = useState('')
  const [originalFile, setOriginalFile] = useState('')
  const [compressedImage, setCompressedImage] = useState('')
  const [compressedFile, setCompressedFile] = useState('');
  const [loadingIMG,setLoadingIMG]=useState(false);

  const handleInput = e => {
    const image = e.target.files[0]
    setOriginalImage(URL.createObjectURL(image))
    setOriginalFile(image)
  }
  const handleCompress = async () => {
      setLoadingIMG(true);
    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1920,
      useWebWorker: true
    }
    if(options.maxSizeMB>=originalFile.size/1024/1024){
        alert("Image is to small");
        setLoadingIMG(false)
       
    }
    else{
        const compressed = await imageCompression(originalFile, options);
        setCompressedImage(URL.createObjectURL(compressed));
        setCompressedFile(compressed)
        console.log(`compressedImage size ${compressed.size / 1024 / 1024} MB`);
        setLoadingIMG(false);
    }

  }

  return (
    <div className='container'>
      <HeadingTitle>Image Compressor</HeadingTitle>
      <input
        type='file'
        accept='image/*'
        onChange={e => handleInput(e)}
        className='input-file'
      />
      <div className='img-container'>
        <div className='container_one'>
          {originalImage ? (
            <img src={originalImage} alt='original' className='img-one' />
          ) : (
            'original image'
          )}

          {originalImage ? (
            <p>{(originalFile.size / 1024 / 1024).toFixed(2)} MB</p>
          ) : null}
        </div>
        
        <div className='container_two'>
        {compressedImage ? (
            <img src={compressedImage} alt='original' className='img-one' />
          ) : (loadingIMG?<img src={loading} alt="loading gif" className="loading"/>:"compressed Image"
            
          )}

          {compressedImage ? (
            <p>{(compressedFile.size / 1024 / 1024).toFixed(2)} MB</p>
          ) : null}
        </div>
      </div>
      <CompressButton type='button' disabled={originalFile?false:true} onClick={handleCompress}>
        Compress
      </CompressButton>
    </div>
  )
}
