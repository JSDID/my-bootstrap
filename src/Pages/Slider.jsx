import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Slider01 from '../Legends.jpg';
import Slider02 from '../Legends.jpg';


export default class Slider extends Component {
  render() {
    return (
    <>
      <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="slider"
          src={Slider01}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="slider"
          src={Slider02}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
   </>
    )
  }
}

