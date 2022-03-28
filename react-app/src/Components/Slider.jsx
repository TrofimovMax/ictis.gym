import React from "react";
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import hero from '../img/hero-slider/hero-1.jpg';
import hero2 from '../img/hero-slider/hero-2.jpg';
import hero3 from '../img/hero-slider/hero-3.jpg';

function Slider() {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={hero}
                        alt="First Slide"
                    />

                    <Carousel.Caption>
                        <div className="hero-text">
                            <h2>Join Us Now</h2>
                            <h1>FITNESS & SPORT</h1>
                            <Link to="/about" className="primary-btn">Read More</Link>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={hero2}
                        alt="First Slide"
                    />

                    <Carousel.Caption>
                        <div className="hero-text">
                            <h2>Join Us Now</h2>
                            <h1>FITNESS & SPORT</h1>
                            <Link to="/about" className="primary-btn">Read More</Link>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={hero3}
                        alt="First Slide"
                    />

                    <Carousel.Caption>
                        <div className="hero-text">
                            <h2>Join Us Now</h2>
                            <h1>FITNESS & SPORT</h1>
                            <Link to="/about" className="primary-btn">Read More</Link>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export { Slider };