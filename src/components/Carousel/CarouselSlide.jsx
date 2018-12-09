import React from 'react';
import styled from 'styled-components';

const Slide = styled.div`
  height: 100%;
`;

const CarouselSlide = (props) => {
  return (
    <Slide id={props.id}>
      <img src={props.imageSrc} alt={props.imageTitle}/>
      <h3>{props.imageTitle}</h3>
    </Slide>
  )
}

export default CarouselSlide
