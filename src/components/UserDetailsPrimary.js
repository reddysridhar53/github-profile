import React from 'react';
import PropTypes from 'prop-types';
import './UserDetails.css';

const UserDetailsPrimary = ({ user }) => {

    return (
        <div className="userDetails-primary">
            <div className="userDetails-primary-lhs">
                <div className="userDetails-primary-img">
                    <img src={user.avatar_url} alt={user.name} />
                </div>
                <div className="userDetails-primary-username">
                    {user.login}
                </div>
            </div>
            <div className="userDetails-primary-rhs">
                <div className="userDetails-primary-row">
                    <div className="userDetails-primary-col left">Bio:</div>
                    <div className="userDetails-primary-col right">{user.bio || 'NA'}</div>
                </div>
                <div className="userDetails-primary-row">
                    <div className="userDetails-primary-col left">Company:</div>
                    <div className="userDetails-primary-col right">{user.company}</div>
                </div>
                <div className="userDetails-primary-row">
                    <div className="userDetails-primary-col left">Location:</div>
                    <div className="userDetails-primary-col right">{user.location}</div>
                </div>
                <div className="userDetails-primary-row">
                    <div className="userDetails-primary-col left">Repos:</div>
                    <div className="userDetails-primary-col right">{user.public_repos}</div>
                </div>
                <div className="userDetails-primary-row">
                    <div className="userDetails-primary-col left">Gists:</div>
                    <div className="userDetails-primary-col right">{user.public_gists}</div>
                </div>
            </div>
        </div>
    )
}

UserDetailsPrimary.propTypes = {
    user: PropTypes.object.isRequired,
}

export default UserDetailsPrimary;