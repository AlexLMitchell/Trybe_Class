import React from 'react';
import Pictures from './Pictures';

class PicturesList extends React.Component {
  render() {
    const { pictures } = this.props;
    return pictures.map((picture) => <li>{picture}</li>);
  }
}

Pictures.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.string),
};

export default PicturesList;
