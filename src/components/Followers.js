import React from 'react'
import PropTypes from 'prop-types';
import Usercard from './Usercard';
import './Followers.css';

class Followers extends React.Component {
    
    componentDidMount() {
        const { onFetchFollowers } = this.props;

        onFetchFollowers && onFetchFollowers();
    }

    render() {
        const { fetchingFollowers, followers } = this.props;

        if (fetchingFollowers || !followers || !followers.length) {
            return (
                <div className='loader'>Loading...</div>
            )
        }
        return (
            <div className='userFollowers-container'>
                {
                    followers.map(follower => {
                        return (
                            <Usercard 
                                key={follower.id} 
                                user={follower}    
                            />
                        )
                    })
                }
            </div>            
        )
    }
}

Followers.propTypes = {
    onFetchFollowers: PropTypes.func.isRequired,
    followers: PropTypes.array,
}

export default Followers;