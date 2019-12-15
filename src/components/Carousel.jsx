import React, { Component } from 'react';
import './Carousel.css';



class Carousel extends Component {
    render() {
        return (

            <div id="carousel" className="carousel slide carousel-fade" data-ride="carousel" data-interval="6000">
            <ol className="carousel-indicators">
                <li data-slide-to="0" className="active"></li>
                <li data-slide-to="1"></li>
                <li data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner" role="listbox">
                <div className="carousel-item active">
                    <a href="/">
                    <picture>
                          <source srcSet={require('../images/slideshow1_2000x500.png')} media="(min-width: 1400px)" />
                          <source srcSet={require('../images/slideshow1_1400x500.png')} media="(min-width: 769px)" />
                           <source srcSet={require('../images/slideshow1_800x500.png')} media="(min-width: 577px)" />
                          <img srcSet={require('../images/slideshow1_600x500.png')} alt="responsive image" className="d-block img-fluid" />
                    </picture>
                        <div className="carousel-caption">
                            <div>
                                <h2>Slide 1</h2>
                                <p>Slide 1 Copy</p>
                            </div>
                        </div>
                    </a>
                </div>

                <div className="carousel-item">
                    <a href="/">
                         <picture>
                         <source srcSet={require('../images/slideshow1_2000x500.png')} media="(min-width: 1400px)" />
                          <source srcSet={require('../images/slideshow1_1400x500.png')} media="(min-width: 769px)" />
                           <source srcSet={require('../images/slideshow1_800x500.png')} media="(min-width: 577px)" />
                          <img srcSet={require('../images/slideshow1_600x500.png')} alt="responsive image" className="d-block img-fluid" />
                        </picture>
    
                        <div className="carousel-caption justify-content-center align-items-center">
                            <div>
                                <h2>Slide 2</h2>
                                <p>Slide 2 Copy</p>
                            </div>
                        </div>
                    </a>
                </div>

                <div className="carousel-item">
                    <a href="/">
                         <picture>
                         <source srcSet={require('../images/slideshow1_2000x500.png')} media="(min-width: 1400px)" />
                          <source srcSet={require('../images/slideshow1_1400x500.png')} media="(min-width: 769px)" />
                           <source srcSet={require('../images/slideshow1_800x500.png')} media="(min-width: 577px)" />
                          <img srcSet={require('../images/slideshow1_600x500.png')} alt="responsive image" className="d-block img-fluid" />
                        </picture>
    
                        <div className="carousel-caption justify-content-center align-items-center">
                            <div>
                                <h2>Slide 3</h2>
                                <p>Slide 3 Copy</p>
                            </div>
                        </div>
                    </a>
                </div>

            </div>

            <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carousel" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
                      
                        );
                    }
                }
                
export default Carousel