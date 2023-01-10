

import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';



export default class Carrousel extends Component {
  render() {
    return (
        <Carousel axis='vertical' autoPlay='true' infiniteLoop='true' interval='2000' showArrows='true' useKeyboardArrows='true'>
            <div>
                <img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/jrfyzvgzvhs1iylduuhj.jpg" alt="Hong Kong"/>
                <p className="legend">Hong Kong</p>
            </div>
            <div>
                <img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/c1cklkyp6ms02tougufx.webp" alt='Macao' />
                <p className="legend">Macao</p>
            </div>
            <div>
                <img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/e8fnw35p6zgusq218foj.webp" alt='Japan'/>
                <p className="legend">Japan</p>
            </div>
            <div>
                <img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/liw377az16sxmp9a6ylg.webp" alt='Las Vegas'/>
                <p className="legend">Las Vegas</p>
            </div>
        </Carousel>
    )
  }
}
