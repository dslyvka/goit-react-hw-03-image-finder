// import { Fragment } from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

function ImageGallery({ images, click }) {
  return (
    <ul className="gallery ImageGallery">
      <ImageGalleryItem images={images} click={click}></ImageGalleryItem>
    </ul>
  );
}
export default ImageGallery;
