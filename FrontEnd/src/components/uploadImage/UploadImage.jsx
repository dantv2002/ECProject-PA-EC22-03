import React, { useState } from 'react';
import { Upload } from 'antd';
import { useDispatch } from 'react-redux';
import { addUserImage } from '../../redux/userpage/UserPageSlice';

const UploadImage = ({imageList,count,type, setImageList,setImageUrl}) => {
  const dispatch = useDispatch()



  const handleChange = async ({ fileList: newFileList }) => {
    
  
    
   
    setImageList(newFileList)
    let  src = await new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(newFileList[0].originFileObj);
      reader.onload = () => resolve(reader.result);
    });
    if(type === "user") dispatch(addUserImage(src))
    // if(type === "admin") setImageList({
    //   uid: "-1",
    //   name: "image.png",
    //   status: "done",
    //   url: null,
    // },)
    if(type === "store") setImageUrl(src)
  }
  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    console.log(src)
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };
  return (
      <Upload
        listType="picture-card"
        fileList={imageList}
        onChange={handleChange}
        onPreview={onPreview}
        maxCount={count}
      >
        {imageList.length < 5 && '+ Upload'}
      </Upload>
  );
};
export default UploadImage;