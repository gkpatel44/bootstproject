import React from 'react'
import { Carousel } from 'react-bootstrap'

const Carousels = () => {
    return (
        <Carousel >
        <Carousel.Item>
          <img
            style={{ width: "100%", height: "700px" }}
            className="d-block  "
            src="https://source.unsplash.com/1600x500/?technology programming"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            // fluid
            style={{ width: "100%", height: "700px" }}
            className="d-block "
            src="https://source.unsplash.com/random/1600×500/?technology laptop"
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ width: "100%", height: "700px" }}
            className="d-block "
            src="https://source.unsplash.com/random/1600×500/?technology code"
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
}

export default Carousels
