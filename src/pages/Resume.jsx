import React, {Component} from 'react';
import Navbar from '../components/Navbar.jsx';

class Resume extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="container">
                    <div>
                        <h2>Resume</h2>
                        <p>Page</p>
                    </div>
                </div>
            </div>
        );

    }
        
}

export default Resume