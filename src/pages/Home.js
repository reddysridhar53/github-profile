import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Home.css';

class Home extends Component {
    render() {

        return (
            <main className='home-conatiner'>
                <h1>Welcome to GitHub Profile Viewer.<br /> Start by tying the user name.</h1>
            </main>
        )
    }
}

Home.propTypes = {
    users: PropTypes.object,
}

export default Home;