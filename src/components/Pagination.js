import React from 'react'
import PropTypes from 'prop-types';
import './Pagination.css';

const PaginationItem = ({ page, currentPage, onPageClick }) => {
    const activePage = currentPage === page ? 'active': '';
    const handlePageClick = () => {
        onPageClick && onPageClick(page);
    }
    
    return (
        <li 
            key={page}
            onClick={handlePageClick}
            className={`${activePage}`}
        >
            {page}
        </li>
    )
}
class Pagination extends React.Component {
    
    renderPageNumbers = () => {
        const { totalPages, currentPage } = this.props;
        const pageNumbers = [];

        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(i);
        }
        return (
            <ul className='pagination-list'>
                {
                    pageNumbers.map(page => {
                        return (
                            <PaginationItem 
                                key={page}
                                page={page}
                                currentPage={currentPage}
                                onPageClick={this.props.onPageClick}
                            />
                        )
                    })
                }
            </ul>
        )
    }
    render() {
        return (
            <div className='pagination'>
                { this.renderPageNumbers() }
            </div>
        )
    }
}

Pagination.propTypes = {
    currentPage: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
    onPageClick: PropTypes.func.isRequired,
}

export default Pagination;