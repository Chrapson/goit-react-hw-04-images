import PropTypes from 'prop-types';

export const Searchbar = ({ handleSearch }) => {
  return (
    <header className="Searchbar">
      <form onSubmit={handleSearch} className="SearchForm">
        <button type="submit" className="SearchForm-button"></button>

        <input
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          name="search"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};
