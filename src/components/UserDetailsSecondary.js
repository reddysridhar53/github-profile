import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
    fetchUserFollowers,
    fetchUserRepos,
    fetchUserRepoCommits,
} from '../actions/UserDetails';
import UserTabItem from './UserTabItem';
import Followers from './Followers';
import Contribution from './Contribution';
import Repos from './Repos';
import constants from '../constants';
import './UserDetails.css';

class UserDetailsSecondary extends Component {

    fetchFollowers = () => {
        const {
            match: {
                params: { userName }
            },
            onFetchUserFollowers,
        } = this.props;

        onFetchUserFollowers && onFetchUserFollowers(userName);        
    }

    fetchRepos = () => {
        const {
            match: {
                params: { userName }
            },
            onFetchUserRepos,
        } = this.props;

        onFetchUserRepos && onFetchUserRepos(userName);
    }

    fetchRepoCommits = (repoName) => {
        const {  
            match: {
                params: { userName }
            },
            onFetchRepoCommits
        } = this.props;

        onFetchRepoCommits && onFetchRepoCommits({userName, repoName});
    }

    handleTabChange = (tab) => {
        const { onTabChange } = this.props;

        onTabChange && onTabChange(tab);
    }

    renderActiveTabContent = () => {
        const {
            activeTab,
            userDetails,
            userFollowers,
            userRepos,
            fetchingUserRepos,
            fetchingUserFollowers,
            fetchingCommits,
            commits,
        } = this.props;

        switch (activeTab) {
            case constants.USER.FOLLOWERS: {
                return (
                    <Followers 
                        onFetchFollowers={this.fetchFollowers}
                        followers={userFollowers}
                        fetchingFollowers={fetchingUserFollowers}
                    />
                )
            }
            case constants.USER.CONTRIBUTION: {
                return (
                    <Contribution 
                        user={userDetails}
                    />
                )
            }
            case constants.USER.REPOS: {
                return (
                    <Repos 
                        onFetchRepos={this.fetchRepos}
                        repos={userRepos}
                        fetchRepoCommits={this.fetchRepoCommits}
                        fetchingRepos={fetchingUserRepos}
                        fetchingCommits={fetchingCommits}
                        commits={commits}
                    />
                )
            }
            default: return null
        }
    }

    render() {
        const { activeTab, tabs } = this.props;

        return (
            <React.Fragment>
                <div className="tabs-container">
                    {
                        tabs.map(tab => {
                            return (
                                <UserTabItem 
                                    key={tab.name}
                                    tab={tab}
                                    activeTab={activeTab}
                                    onTabClick={this.handleTabChange}
                                />
                            )
                        })
                    }
                </div>
                <div className="tabs-content-container">
                    { this.renderActiveTabContent() }
                </div>
            </React.Fragment>
        )
    }
}

UserDetailsSecondary.propTypes = {
    match: PropTypes.object,
    userFollowers: PropTypes.array,
    userRepos: PropTypes.array,
    fetchingUserFollowers: PropTypes.bool,
    fetchingUserRepos: PropTypes.bool,
    fetchingCommits: PropTypes.bool,
    commits: PropTypes.array,
    onTabChange: PropTypes.func.isRequired,
    onFetchUserFollowers: PropTypes.func,
    onFetchRepoCommits: PropTypes.func,
    onFetchUserRepos: PropTypes.func,
}

const mapStateToProps = ({ user }) => {
    return {
        ...user,
    }
};

const mapDispatchToProps = dispatch => ({
    onFetchUserFollowers: (params) => dispatch(fetchUserFollowers(params)),
    onFetchUserRepos: (params) => dispatch(fetchUserRepos(params)),
    onFetchRepoCommits: (params) => dispatch(fetchUserRepoCommits(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(UserDetailsSecondary));