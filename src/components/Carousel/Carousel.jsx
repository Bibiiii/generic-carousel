import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import CarouselSlide from './CarouselSlide'

const CarouselWrapper = styled.div`
  width: 100%;
  overflow-x: hidden;
`;

const CarouselContainer = styled.div`
  white-space: nowrap;
  display: flex;
  margin: 0 0 20px 20px;
`;

const CarouselSlideContainer = styled.div`
  flex: 1 0 100%;
  flex-basis: 250px;
  margin-right: 20px;
  img {
    width: 100%;
  }
`;

class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      slidePosition: 0
    }
  }

  render() {
    const { children } = this.props;
    const app = this;

    return (
      <CarouselWrapper>
        <CarouselContainer>
          {React.Children.map(children, function(child, i) {
            return (
              <CarouselSlideContainer
                key={ i }
              >
                {child}
              </CarouselSlideContainer>
            )
          })}
        </CarouselContainer>
      </CarouselWrapper>
    )
  }
}

Carousel.propTypes = {
  children: PropTypes.node
};

export default Carousel;
