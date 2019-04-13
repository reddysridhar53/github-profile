import React, { Fragment } from 'react'
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import Pagination from './Pagination';
import Commitslist from './Commitslist';
import './Commits.css';

class Commits extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            commitsPerPage: 10,
        }
    }
    componentDidMount() {
        const { onFetchCommits } = this.props;

        onFetchCommits && onFetchCommits();
    }

    handleCommitsModalClose = () => {
        const { onClose } = this.props;

        onClose && onClose()
    }
    handlePageClick = (pageNo) => {
        this.setState({ currentPage: pageNo });
    }

    render() {
        const { fetchingCommits, commits, repoName } = this.props;
        const { currentPage, commitsPerPage } = this.state;
        let commitsToShow = [],
            totalPages = 0;

        if (!fetchingCommits && commits && commits.length) {
            commitsToShow = commits.slice(commitsPerPage * (currentPage - 1), commitsPerPage * currentPage )
            totalPages = Math.ceil(commits.length / commitsPerPage);
        }
    
        return (
            <Modal 
                isOpen={true}
                onRequestClose={this.handleCommitsModalClose}
                shouldCloseOnOverlayClick={true}
                overlayClassName='overlay'
                className='commits-modal'
            >
                <div className='modal-inner'>
                    {
                        fetchingCommits ? (
                            <div className='loader'>Loading...</div>
                        ) : (
                            <Fragment>
                                <div className='modal-header'>
                                    <div className='repo-name'>{repoName}</div>
                                    <div className='close' onClick={this.handleCommitsModalClose}>close</div>
                                </div>
                                <div className='modal-content'>
                                    <Commitslist 
                                        commits={commitsToShow}
                                        commitNo={commitsPerPage * (currentPage - 1)}
                                    />
                                </div>
                                {
                                    totalPages > 1 ? (
                                        <div className='modal-footer'>
                                            <Pagination 
                                                currentPage={currentPage}
                                                totalPages={totalPages}
                                                onPageClick={this.handlePageClick}
                                            />
                                        </div>
                                    ) : null
                                }
                            </Fragment>
                        )
                    }
                </div>
            </Modal>
        )
    }
}

Commits.propTypes = {
    repoName: PropTypes.string.isRequired,
    onFetchCommits: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    fetchingCommits: PropTypes.bool.isRequired,
    Commits: PropTypes.array,
}

export default Commits;