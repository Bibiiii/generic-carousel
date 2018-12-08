import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  render() {
    const { children } = this.props;

    return (
      <div>
        { children }
      </div>
    )
  }
}
Carousel.propTypes = {
  children: PropTypes.node
};

export default Carousel;
