import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keyup', this.handleClose);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleClose);
  }

  handleClose = e => {
    const { closeModal } = this.props;
    if (e.key === 'Escape' || e.target.id === 'Overlay') {
      closeModal(e);
    }
  };

  render() {
    const { largeImg } = this.props;

    return (
      <div id="Overlay" className="Overlay" onClick={this.handleClose}>
        <div className="Modal">
          <img src={largeImg} alt="pixabay" />
        </div>
      </div>
    );
  }
}

export default Modal;

Modal.propTypes = {
  largeImg: PropTypes.string.isRequired,
};
