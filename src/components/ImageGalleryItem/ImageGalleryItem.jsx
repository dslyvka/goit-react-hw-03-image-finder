import { Fragment } from 'react';

function ImageGalleryItem({ images }) {
  return (
    <Fragment>
      {images.map(img => {
        return (
          <li className="gallery-item ImageGalleryItem" key={img.id}>
            <img
              src={img.webformatURL}
              alt=""
              className="ImageGalleryItem-image"
            />
          </li>
        );
      })}
    </Fragment>
  );
}

export default ImageGalleryItem;
