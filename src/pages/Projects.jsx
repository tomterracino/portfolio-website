import React, {Component} from 'react';
import Navbar from '../components/Navbar.jsx';
import Featurette from '../components/Featurette.jsx';

class Projects extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="container">
                    <div>
                        <h2>Projects</h2>
                        <p>Page</p>
                        <Featurette />
                    </div>
                </div>
            </div>
        );

    }
        
}

export default Projects