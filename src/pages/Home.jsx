import React, {Component} from 'react';
import './Home.css';
import Navbar from '../components/Navbar.jsx';
import Carousel from '../components/Carousel.jsx';
import Featurette from '../components/Featurette.jsx'


class Home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Carousel />
                <div className="container text-center py-4">
                    <div>
                        <h2>Body Header</h2>
                        <p>Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo</p>
                    </div>
                </div>
                <Featurette />
            </div>
        );

    }
        
}

export default Home