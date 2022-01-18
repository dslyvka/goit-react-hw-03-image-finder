import { Fragment } from 'react';

function ImageGalleryItem({ images, click, id }) {
  const { webformatURL, largeImageURL } = images;
  return (
    <Fragment>
    <li className="gallery-item ImageGalleryItem" >
      <img
        src={webformatURL}
        alt=""
        className="ImageGalleryItem-image"
        image={largeImageURL}
          onClick={click}
          id={id}
      />
    </li>
    </Fragment>
  );
}

export default ImageGalleryItem;
