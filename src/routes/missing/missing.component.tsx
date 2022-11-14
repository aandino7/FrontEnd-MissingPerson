import "./missing.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Image } from "../../api/models";
import ImageFrame from "../../Components/ImageFrame/imageframe.component";

const Missing = () => {
  const [images, setImages] = useState<Image[]>([] as Image[]);

  const getImages = () => {
    axios.get("http://127.0.0.1:8000/get-images").then(res => {
      setImages(res.data);
    });
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <div>
      <ImageFrame images={images}></ImageFrame>
    </div>
  );
};

export default Missing;
