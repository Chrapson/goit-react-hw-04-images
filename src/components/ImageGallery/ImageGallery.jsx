import PropTypes from 'prop-types';
import ImageGalleryItem from './ImageGalleryItem';

export const ImageGallery = ({ pics }) => {
  return (
    <ul className="ImageGallery">
      {pics &&
        pics.map(pic => {
          const { id, webformatURL, largeImageURL, tags } = pic;
          return (
            <ImageGalleryItem
              key={id}
              // id={id}
              webformatURL={webformatURL}
              largeImageURL={largeImageURL}
              alt={tags}
            />
          );
        })}
    </ul>
  );
};

ImageGallery.propTypes = {
  pics: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ).isRequired,
};
