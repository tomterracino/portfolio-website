import React, { Component } from 'react';
import './Featurette.css';



class Featurette extends Component {
    render() {
        return (

            <div className="container feature border border-dark rounded">
                <div className="container marketing">

                    <hr className="featurette-divider" />

                    <div className="row featurette">
                        <div className="col-md-7">
                            <h2 className="featurette-heading">Coding  <span className="text-muted">Projects</span></h2>
                            <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                        </div>
                        <div className="col-md-5">
                        <img srcSet={require('../images/codephoto.jpg')} alt="responsive image" className="featurette-image img-fluid mx-auto" />
                        </div>
                    </div>
                    
                    <hr className="featurette-divider" />

                    <div className="row featurette">
                        <div className="col-md-7 push-md-5">
                            <h2 className="featurette-heading">UX Design <span className="text-muted">Projects</span></h2>
                            <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                        </div>
                        <div className="col-md-5 pull-md-7">
                            <img srcSet={require('../images/uxphoto.jpg')} alt="responsive image" className="featurette-image img-fluid mx-auto" />
                        </div>
                    </div>

                    <hr className="featurette-divider" />

                    <div className="row featurette">
                        <div className="col-md-7">
                            <h2 className="featurette-heading">About <span className="text-muted">Me</span></h2>
                            <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                        </div>
                        <div className="col-md-5">
                        <img srcSet={require('../images/tomphoto.jpg')} alt="responsive image" className="featurette-image img-fluid mx-auto" />

                        </div>
                    </div>


                </div>
            </div>

        );
    }
}

export default Featurette