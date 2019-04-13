import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Usercard.css';

const Usercard = ({ user }) => {

    return (
        <div className="userCard">
            <Link to={`/users/${user.login}`} className="userCard-link">
                <div className="userCard-lhs">
                    <div className="userCard-img">
                        <img src={user.avatar_url} alt={user.name} />
                    </div>
                    <div className="userCard-username">
                        {user.login}
                    </div>
                </div>
                <div className="userCard-rhs">
                    <div className="userCard-row">
                        <div className="userCard-col">Bio:</div>
                        <div className="userCard-col">{user.bio || 'NA'}</div>
                    </div>
                    <div className="userCard-row">
                        <div className="userCard-col">Company:</div>
                        <div className="userCard-col">{user.company || 'NA'}</div>
                    </div>
                    <div className="userCard-row">
                        <div className="userCard-col">Location:</div>
                        <div className="userCard-col">{user.location || 'NA'}</div>
                    </div>
                    <div className="userCard-row">
                        <div className="userCard-col">Repos:</div>
                        <div className="userCard-col">{user.public_repos || 'NA'}</div>
                    </div>
                    <div className="userCard-row">
                        <div className="userCard-col">Gists:</div>
                        <div className="userCard-col">{user.public_gists || 'NA'}</div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

Usercard.propTypes = {
    user: PropTypes.object.isRequired,
}

export default Usercard;