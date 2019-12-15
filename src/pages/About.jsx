import React, {Component} from 'react';
import Navbar from '../components/Navbar.jsx';

class About extends Component {

        render() {
        return (
            <div>
                <Navbar />
                <div className="container">
                    <div>
                        <h2>About</h2>
                        <p>Page</p>
                    </div>
                </div>
            </div>
        );

    }
        
}

export default About