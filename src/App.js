import React, { Component } from 'react';
import Carousel from './components/Carousel/Carousel'

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      carouselImagesLoaded: false,
      carouselImages: []
    }
  }

  componentDidMount() {
    fetch("https://pixabay.com/api/?key=9656065-a4094594c34f9ac14c7fc4c39&q=yellow+flowers&image_type=photo")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            carouselImagesLoaded: true,
            carouselImages: result.hits.slice(0, 10)
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
    return (
      <div className="App">
        <Carousel>
          <p>Test</p>
        </Carousel>
      </div>
    );
  }
}

export default App;
