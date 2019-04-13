import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { searchUsersData } from '../actions/Home';
import UsersSearchList from './UsersSearchList';
import './Header.css';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state= {
            showUsersList: false,
            searchTerm: props.users.searchTerm || '',
        };
        this.debounceSearch = _.debounce(this.debounceSearch, 300);
    }

    componentDidMount() {
        const {
            match: {
                params: { userName }
            },
        } = this.props;

        if (userName) {
            this.setState({ searchTerm: userName });
        }
    }

    handleChange = (e) => {
        const query = e.currentTarget.value;

        this.setState({ searchTerm: query, showUsersList: true });
        this.debounceSearch();
    };

    debounceSearch = () => {
        const { onSearchUsers } = this.props;

        onSearchUsers && onSearchUsers(this.state.searchTerm);
    }

    handleSearchResultClick = (user) => {
        const { history } = this.props;

        this.setState({ showUsersList: false });
        history.push(`/users/${user.login}`);
        window.location.href = window.location.href;
    }

    render() {
        const { users } = this.props;
        const { searchTerm, showUsersList } = this.state;

        return (
            <header className="header">
                <nav className="header-nav">
                    <div className="header-search">
                        <input
                            type="text"
                            placeholder="Search user"
                            onChange={this.handleChange}
                            value={searchTerm}
                        />
                        {
                            users.list && users.list.length && showUsersList ? (
                                <UsersSearchList 
                                    users={users.list}
                                    handleUserClick={this.handleSearchResultClick}
                                />
                            ) : null
                        }
                    </div>
                </nav>
            </header>
        )
    }
}

Header.propTypes = {
    onSearchUsers: PropTypes.func.isRequired,
    users: PropTypes.object,
    searchingUsers: PropTypes.bool,
    history: PropTypes.object,
}

const mapStateToProps = ({ home }) => {
    return {
        users: home.users,
    }
}

const mapDispatchToProps = dispatch => ({
    onSearchUsers: (params) => dispatch(searchUsersData(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));