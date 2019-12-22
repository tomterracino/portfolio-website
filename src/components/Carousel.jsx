import React, { Component } from 'react';
import './Carousel.css';



class Carousel extends Component {
    render() {
        return (

            <div id="carousel" className="carousel slide carousel-fade">
        
            <div className="carousel-inner" role="listbox">
                <div className="carousel-item active">
                    <picture>
                          <source srcSet={require('../images/header_home2000x500.jpg')} media="(min-width: 1400px)" />
                          <source srcSet={require('../images/header_home1400x500.jpg')} media="(min-width: 769px)" />
                           <source srcSet={require('../images/header_home800x500.jpg')} media="(min-width: 577px)" />
                          <img srcSet={require('../images/header_home750x500.jpg')} alt="responsive image" className="d-block img-fluid" />
                    </picture>
                        <div className="carousel-caption">
                            <div className="text-dark">
                                <h2 className="py-1 my-0">Third Planet</h2>
                                <p className="py-1 my-0">Design</p>
                            </div>
                        </div>

                </div>

            </div>
        </div>
                      
                        );
                    }
                }
                
export default Carousel