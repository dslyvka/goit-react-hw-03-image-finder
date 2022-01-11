// import { Fragment } from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

function ImageGallery({ images }) {
  return (
    <ul className="gallery ImageGallery">
      <ImageGalleryItem images={images}></ImageGalleryItem>
    </ul>
  );
}
export default ImageGallery;
