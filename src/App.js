import React, { Component } from 'react';
import styled from 'styled-components';

import Carousel from './components/Carousel/Carousel';
import CarouselSlide from './components/Carousel/CarouselSlide';

// Styled content
const ContentContainer = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Ropa+Sans');
  font-family: 'Ropa Sans', sans-serif;
  padding: 20px;
  @media (min-width: 500px) {
    padding: 40px;
  }
`;

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      carouselImagesLoaded: false,
      carouselImages: []
    }
  }

  // Fetch images from API when component mounts
  componentDidMount() {
    fetch("https://pixabay.com/api/?key=9656065-a4094594c34f9ac14c7fc4c39&q=frost&image_type=photo")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            carouselImagesLoaded: true,
            carouselImages: result.hits.slice(0, 10) // limit number of images to 10
          });
        },
        (error) => {
          this.setState({
            carouselImagesLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { carouselImagesLoaded, carouselImages } = this.state;
    return (
      <div>
        <ContentContainer>
          <h1>Cat's Generic Carousel</h1>
          {/* Check if images have loaded */}
          { carouselImagesLoaded && carouselImages.length ? (
            <Carousel>
              { carouselImages.map((image, i) => {
                // Return the image. Also pass key
                return (
                 <CarouselSlide key={i} id={i} imageSrc={image.largeImageURL} imageTitle={image.user}/>
                )
              }) }
            </Carousel>
          ) : (
            <p>No images found</p>
          )}
        </ContentContainer>
      </div>
    );
  }
}

export default App;
