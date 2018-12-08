import React from 'react';
import styled from 'styled-components';

const CarouselSlide = (props) => {
  return (
    <div id={props.id}>
      <img src={props.imageSrc} alt={props.imageTitle}/>
    </div>
  )
}

export default CarouselSlide
