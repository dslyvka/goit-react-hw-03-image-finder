// import { Fragment } from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

function ImageGallery({ images, onImageClick }) {
  return (
    <ul className="gallery ImageGallery">
      {images.map(img => {
        return (
          <ImageGalleryItem
            key={img.id}
            image={img}
            onImageClick={onImageClick}
          ></ImageGalleryItem>
        );
      })}
    </ul>
  );
}
export default ImageGallery;
