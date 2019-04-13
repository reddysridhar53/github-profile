import React from 'react'
import PropTypes from 'prop-types';
import './Commitslist.css';

const CommitItem = ({ commit, sNo }) => {
    return (
        <tr>
            <td>{sNo}</td>
            <td>{commit.sha}</td>
            <td>{commit.commit.committer.name}</td>
            <td>{commit.commit.message}</td>
        </tr>
    )
}
class Commitslist extends React.Component {
    render() {
        const { commits, commitNo } = this.props;

        return (
            <table className='commits-table'>
                <thead>
                    <tr>
                    <th>No.</th>
                    <th>Sha</th>
                    <th>Commiter</th>
                    <th>Message</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        commits.map((commit, index) => {
                            return (
                                <CommitItem 
                                    key={commit.sha}
                                    commit={commit}
                                    sNo={commitNo + index + 1}
                                />
                            )
                        })
                    }
                </tbody>
            </table>
        )
    }
}

Commitslist.propTypes = {
    commitNo: PropTypes.number.isRequired,
    commits: PropTypes.array.isRequired,
}

export default Commitslist;