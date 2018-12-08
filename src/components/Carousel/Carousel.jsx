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
  order: ${(props) => props.order};
  img {
    width: 100%;
  }
`;

class Carousel extends Component {
  constructor(props){
    super(props);

    this.state = {
      slidePosition: 0,
      carouselLength: this.props.children.length
    }
  }

  getSlideOrder(slideIndex) {
    const { slidePosition, carouselLength } = this.state
    if (slideIndex - slidePosition < 0) {
      return carouselLength - Math.abs(slideIndex - slidePosition)
    }
    return slideIndex - slidePosition
  }

  nextSlide = () => {
    const { slidePosition, carouselLength } = this.state
    this.setState({
      slidePosition: slidePosition === carouselLength - 1 ? 0 : slidePosition + 1
    })
  }

  prevSlide = () => {
    const { slidePosition, carouselLength } = this.state
    this.setState({
      slidePosition: slidePosition === 0 ? carouselLength - 1 : slidePosition - 1
    })
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
                order={ app.getSlideOrder(i) }
              >
                {child}
              </CarouselSlideContainer>
            )
          })}
        </CarouselContainer>
        <button onClick={ () => this.prevSlide() }>Prev</button>
        <button onClick={ () => this.nextSlide() }>Next</button>
      </CarouselWrapper>
    )
  }
}

Carousel.propTypes = {
  children: PropTypes.node
};

export default Carousel;
