import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import _ from 'lodash';
import { fetchUserDetails } from '../actions/UserDetails';
import UserDetailsPrimary from '../components/UserDetailsPrimary';
import UserDetailsSecondary from '../components/UserDetailsSecondary';
import './UserDetails.css';

class UserDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: props.activeTab || 'followers',
        }
        this.tabs = [
            {
                name : 'followers',
                label: 'Followers',
            },
            {
                name : 'repos',
                label: 'Repos',
            },
            {
                name : 'contribution',
                label: 'Contribution',
            },
        ]
    }

    componentWillMount() {
        
    }

    componentDidMount() {
        const {
            match: {
                params: { userName }
            },
            onFetchUserDetails,
        } = this.props;

        onFetchUserDetails(userName);
    }

    componentWillUnmount() {
        // this.unlisten();
    }

    handleTabChange = (tab) => {
        this.setState({ activeTab: tab });
    }

    render() {
        const { userDetails } = this.props;
        const { activeTab } = this.state;

        if (!_.size(userDetails) > 0) {
            return (
                <div className="loading-wrapper">
                    <p className="loading-text">
                        Loading...
                    </p>
                </div>
            )
        }
        return (
            <div className="userDetails-container">
                <div className="userDetails-conatiner_inner">
                    <div className="userDetails-content-primary">
                        <UserDetailsPrimary user={userDetails} />
                    </div>
                    <div className="userDetails-content-secondary">
                        <UserDetailsSecondary 
                            user={userDetails} 
                            activeTab={activeTab} 
                            tabs={this.tabs} 
                            onTabChange={this.handleTabChange}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

UserDetails.propTypes = {
    match: PropTypes.object,
    userDetails: PropTypes.object,
    onFetchUserDetails: PropTypes.func,
}

const mapStateToProps = ({ user }) => {
    return {
        ...user,
    }
};

const mapDispatchToProps = dispatch => ({
    onFetchUserDetails: (params) => dispatch(fetchUserDetails(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(UserDetails));