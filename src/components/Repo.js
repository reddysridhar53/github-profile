import React from 'react';
import PropTypes from 'prop-types';
import './Repo.css';

const Repo = ({ repo, onRepoClick }) => {

    const handleRepoClick = () => {
        onRepoClick && onRepoClick(repo);
    }
    const updatedAt = repo.updated_at ? (new Date(repo.updated_at)).toDateString() : null

    return (
        <div className='repoCard' onClick={handleRepoClick}>
            <div className='inner'>
                <div className='header'>{repo.name}</div>
                {
                    repo.fork ? (
                        <div className='sub-header'>
                            Forked from <a href={repo.git_url} target='_blank'>{repo.full_name}</a>
                        </div>
                    ) : null
                }
                <div className='content'>
                    <div className='description'>{repo.description}</div>
                </div>
                <div className='footer'>
                    {
                        repo.language ? (
                            <div className='language'>{repo.language}</div>
                        ) : null
                    }
                    {
                        repo.forks_count ? (
                            <div className='forks'>{repo.forks_count}</div>
                        ) : null
                    }
                    {
                        repo.license ? (
                            <div className='liscence'>{repo.license.name}</div>
                        ) : null
                    }
                    {
                        updatedAt ? (
                            <div className='updated'>Updated On: {updatedAt}</div>
                        ) : null
                    }
                    
                </div>
            </div>
        </div>
    )
}

Repo.propTypes = {
    repo: PropTypes.object.isRequired,
    onRepoClick: PropTypes.func.isRequired,
}

export default Repo;