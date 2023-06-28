import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Searchbar extends Component {
  state = {
    searchValue: '',
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.handleSearch(this.state.searchValue);
    this.setState({ searchValue: '' });
    if (this.state.searchValue === '') return;
  };
  handleChange = e => {
    this.setState({ searchValue: e.target.value });
  };
  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="button-label"></span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            name="searchValue"
            value={this.state.searchValue}
            onChange={this.handleChange}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
export default Searchbar;

Searchbar.propTypes = {
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
};
