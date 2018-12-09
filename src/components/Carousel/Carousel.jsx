import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CarouselWrapper = styled.div`
  width: 100%;
  overflow-x: hidden;
  .buttonContainer {
    width: 50%;
    margin: 30px auto;
    display: flex;
    justify-content: space-around;
    button {
      font-family: 'Ropa Sans',sans-serif;
      font-size: 20px;
      letter-spacing: 0.5px;
      text-transform: uppercase;
      color: #4C5E6A;
      background-color: white;
      padding: 5px 15px;
      border: 1px solid #4C5E6A;
      border-radius: 3px;
      box-shadow: 0 1px 4px #dbdbdb;
      transition: all .2s;
      cursor: pointer;
      &:hover {
        background-color: #4C5E6A;
        color: white;
      }
    }
  }
`;

const CarouselContainer = styled.div`
  white-space: nowrap;
  display: flex;
  background: #f2f2f2;
  position: relative;
  padding: 20px;
  @media (min-width: 500px) {
    padding: 40px 20px 70px;
  }
  img.arrow {
    position: absolute;
    top: calc(50% - 31.3px);
    cursor: pointer;
    &.next {
      right: 0;
    }
    &.previous {
      left: 0;
      -moz-transform: scaleX(-1);
      -o-transform: scaleX(-1);
      -webkit-transform: scaleX(-1);
    }
  }

`;

const CarouselSlideContainer = styled.div`
  flex-basis: 100%;
  flex: 1 0 100%;
  order: ${(props) => props.order};
  margin-right: 20px;
  @media (min-width: 500px) {
    flex-basis: 350px;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

class Carousel extends Component {
  constructor(props){
    super(props);

    this.state = {
      activeSlide: 0, // set as first slide in array
      carouselLength: this.props.children.length
    }
  }

  getSlideOrder(slideIndex) {
    const { activeSlide, carouselLength } = this.state
    if (slideIndex - activeSlide < 0) {
      // attach slide back onto end of flexbox if it's a minus number
      return carouselLength - Math.abs(slideIndex - activeSlide)
    } else {
      // position slide appropriate number of spaces in flexbox
      return slideIndex - activeSlide
    }
  }

  nextSlide = () => {
    const { activeSlide, carouselLength } = this.state;
    // if active slide is last in array, set new active slide as 0, otherwise set new active slide as next slide
    this.setState({
      activeSlide: activeSlide === carouselLength - 1 ? 0 : activeSlide + 1
    })
  }

  prevSlide = () => {
    const { activeSlide, carouselLength } = this.state;
    // if active slide is first slide, set new active slide as last slide, otherwise set new active slide as previous slide
    this.setState({
      activeSlide: activeSlide === 0 ? carouselLength - 1 : activeSlide - 1
    })
  }

  render() {
    const { children } = this.props;
    const app = this;

    return (
      <CarouselWrapper>
        <CarouselContainer
          ref={this.carousel}
        >
          <img
            src="arrow.svg"
            alt="previous"
            className="arrow previous"
            onClick={ () => this.prevSlide()}
          />
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
          <img
            src="arrow.svg"
            alt="next"
            className="arrow next"
            onClick={ () => this.nextSlide() }
          />
        </CarouselContainer>
        <div className="buttonContainer">
          <button onClick={ () => this.prevSlide() }>Prev</button>
          <button onClick={ () => this.nextSlide() }>Next</button>
        </div>
      </CarouselWrapper>
    )
  }
}

Carousel.propTypes = {
  children: PropTypes.node
};

export default Carousel;
