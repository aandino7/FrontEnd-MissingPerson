import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from '@mui/material/IconButton';
import "./imageframe.css";
import InfoIcon from '@mui/icons-material/Info';
import {Image} from "../../api/models"

interface ImageFrameProps {
  gap?: number;
  cols?: number;
  images: Image[];
}

const ImageFrame = ({ gap = 0, cols = 4, images }: ImageFrameProps) => {
  return ( 
  <div className="frame1">
    <ImageList sx={{ width: 900, height: 550 }}>
      <ImageListItem key="Subheader" cols={2}>
      </ImageListItem>
      {images.map((item) => (
        <ImageListItem key={item.fileName}>
          <img
              src={item.imagePath}
              srcSet={item.imagePath}
              alt={item.fileName}
              loading="lazy"
            />
          <ImageListItemBar
            title={item.fileName}
            actionIcon={
              <IconButton
                sx={{ color: 'white' }}
                aria-label={`info about ${item.fileName}`}>
                <InfoIcon/>
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
    </div>
  );
};

export default ImageFrame;