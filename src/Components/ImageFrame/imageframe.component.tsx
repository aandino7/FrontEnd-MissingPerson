import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import "./imageframe.css";
import { Image } from "../../api/models";

interface ImageFrameProps {
  width?: number;
  height?: number;
  cols?: number;
  images: Image[];
}

const ImageFrame = ({
  height = 550,
  width = 900,
  cols = 2,
  images,
}: ImageFrameProps) => {
  return (
    <div className="frame1">
      <ImageList sx={{ width: width, height: height }}>
        <ImageListItem key="Subheader" cols={cols}></ImageListItem>
        {images.map((item) => (
          <ImageListItem key={item.fileName}>
            <img
              src={item.imagePath}
              srcSet={item.imagePath}
              alt={item.fileName}
              loading="lazy"
            />
            <ImageListItemBar title={item.personName} />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
};

export default ImageFrame;
