import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import links from '../../helpers/links';
import './Pagination.css'

class Pagination extends Component {
    state = {
        lastPage: Math.ceil(this.props.postsCount / 12),
        pagesLink: {
            first: '',
            prev: '',
            current: '',
            next: '',
            last: '',
        },
    };

    static propTypes = {
        currentPage: PropTypes.number.isRequired,
        postsCount: PropTypes.number,
    };

    componentDidMount() {
        this.setLastPageAndLinks();
    }

    componentDidUpdate(prevProps) {
        const { currentPage, postsCount } = this.props;
        if (currentPage !== prevProps.currentPage || postsCount !== prevProps.postsCount) {
            this.setLastPageAndLinks();
        }
    }

    setLastPageAndLinks() {
        this.setState({
            lastPage: Math.ceil(this.props.postsCount / 12),
        }, this.setNewPagesLink); //callback for set new links after the lastPage is setted because the links depend on the lastPage
    }

    setNewPagesLink() {
        const newPagesLink = {
            first: this.getFirstLink(),
            prev: this.getPrevLink(),
            current: this.getCurrentLink(),
            next: this.getNextLink(),
            last: this.getLastLink(),
        };
        this.setState({ pagesLink: newPagesLink });
    }

    getLink(getPageNumber) {
        const { lastPage } = this.state;
        const page = getPageNumber();
        const validPage = page < 1 ? 1 : page > lastPage ? lastPage : page;
        return `${links.mainPageLink}/${validPage}`;
    }

    getFirstLink = this.getLink.bind(this, () => 1);
    getPrevLink = this.getLink.bind(this, () => this.props.currentPage - 1);
    getCurrentLink = this.getLink.bind(this, () => this.props.currentPage);
    getNextLink = this.getLink.bind(this, () => this.props.currentPage + 1);
    getLastLink = this.getLink.bind(this, () => this.state.lastPage);

    render() {
        const curPage = this.props.currentPage;
        const { lastPage, pagesLink } = this.state;
        const { postsCount } = this.props;
        
        return (
            <nav className="row pagination">
                <ul className="pagination__list">
                    <li className="pagination__item">
                        <Link to={pagesLink.first} className="pagination__link">first</Link>
                    </li>
                    <li className="pagination__item">
                        <Link to={pagesLink.prev} className={cn('pagination__link', { 'pagination__link_disabled': !(curPage - 1) })}>prev</Link>
                    </li>
                    <li className="pagination__item">
                        <Link to={pagesLink.current} className="pagination__link pagination__link_active">{curPage}</Link>
                    </li>
                    <li className="pagination__item">
                        <Link to={pagesLink.next} className={cn('pagination__link', { 'pagination__link_disabled': (lastPage === curPage || postsCount === undefined) })}>next</Link>
                    </li>
                    <li className="pagination__item">
                        <Link to={pagesLink.last} className={cn('pagination__link', { 'pagination__link_disabled': postsCount === undefined })}>last</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Pagination;