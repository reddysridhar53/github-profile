import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './Header.css';

const UserListItem = ({ user, onUserItemClick }) => {
    
    const handleItemCick = () => {
        onUserItemClick && onUserItemClick(user)
    }

    return (
        <li className="users-list-item" onClick={handleItemCick}>
            <div className="users-list-item-img">
                <img  src={user.avatar_url} alt={user.login} />
            </div>
            <div className="users-list-item-name">{user.login}</div>
        </li>
    )
}

class UsersSearchList extends PureComponent {

    handleUserItemClick = (user) => {
        const { handleUserClick } = this.props;

        handleUserClick && handleUserClick(user)
    }

    render() {
        const { users } = this.props;

        return (
            <div className="users-list-container">
                <ul className="users-list-items">
                    {
                        users && users.length ? users.map(user => {
                            return (
                                <UserListItem 
                                    key={user.id}
                                    user={user}
                                    onUserItemClick={this.handleUserItemClick}
                                />
                            )
                        }) : null
                    }
                </ul>
            </div>
        )
    }
}

UsersSearchList.propTypes = {
    users: PropTypes.array.isRequired,
    handleUserClick: PropTypes.func.isRequired,
}

export default UsersSearchList;