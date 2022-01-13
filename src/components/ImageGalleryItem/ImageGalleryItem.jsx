import { Fragment } from 'react';

function ImageGalleryItem({ images, click }) {
  return (
    <Fragment>
      {images.map(img => {
        return (
          <li className="gallery-item ImageGalleryItem" key={img.id}>
            <img
              src={img.webformatURL}
              alt=""
              className="ImageGalleryItem-image"
              image={img.largeImageURL}
              onClick={click}
            />
          </li>
        );
      })}
    </Fragment>
  );
}

export default ImageGalleryItem;
