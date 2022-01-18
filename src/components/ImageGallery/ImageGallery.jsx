// import { Fragment } from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import { v4 as uuidv4 } from 'uuid';

function ImageGallery({ images, click }) {
  return (
    <ul className="gallery ImageGallery">
      {images.map(img => {
        return (
          <ImageGalleryItem
            key={uuidv4()}
            images={img}
            click={click}
            id={img.id}
          ></ImageGalleryItem>
        );
      })}
    </ul>
  );
}
export default ImageGallery;
