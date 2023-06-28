import PropTypes from 'prop-types';

export const Button = ({ handleLoadMore }) => {
  return (
    <button className="Button" type="button" onClick={handleLoadMore}>
      Load More
    </button>
  );
};
Button.propTypes = { handleLoadMore: PropTypes.func.isRequired };
