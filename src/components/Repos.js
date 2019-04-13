import React from 'react'
import PropTypes from 'prop-types'
import Repo from './Repo';
import Commits from './Commits';
import './Repos.css';

class Repos extends React.Component {
    state = {
        showCommitsModal: false,
        activeRepo: '',
    }
    componentDidMount() {
        const { onFetchRepos } = this.props;

        onFetchRepos && onFetchRepos();
    }
    fetchCommits = () => {
        const { fetchRepoCommits } = this.props;
        const { activeRepo: { full_name: repoName } } = this.state;

        fetchRepoCommits && fetchRepoCommits(repoName);
    }
    handleRepoClick = (repo) => {
        this.setState({
            activeRepo: repo,
            showCommitsModal: true,
        })
    }
    handleCommitsModalClose = () => {
        this.setState({
            activeRepo: '',
            showCommitsModal: false,
        })
    }
    render() {
        const { fetchingRepos, repos, fetchingCommits, commits } = this.props;
        const { activeRepo: { full_name: repoName } } = this.state;

        if (fetchingRepos || !repos || !repos.length) {
            return (
                <div className='loader'>Loading...</div>
            )
        }
        return (
            <div className='repos-container'>
            {
                repos.map(repo => {
                    return (
                        <Repo 
                            key={repo.id}
                            repo={repo}
                            onRepoClick={this.handleRepoClick}
                        />
                    )
                })
            }
            {
                this.state.showCommitsModal ? (
                    <Commits
                        repoName={repoName}
                        fetchingCommits={fetchingCommits}
                        commits={commits}
                        onFetchCommits={this.fetchCommits}
                        onClose={this.handleCommitsModalClose}
                    />
                ) : null
            }
            </div>
        )
    }
}

Repos.propTypes = {
    onFetchRepos: PropTypes.func.isRequired,
    fetchRepoCommits: PropTypes.func.isRequired,
    fetchingRepos: PropTypes.bool.isRequired,
    fetchingCommits: PropTypes.bool,
    commits: PropTypes.array,
    repos: PropTypes.array,
}

export default Repos;