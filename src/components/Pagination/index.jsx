import React, { Component } from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import routes from '../../helpers/urls';
import './Pagination.css'

class Pagination extends Component {

    state = {
        lastPage:  Math.ceil(this.props.postsCount / 12),
        pagesLink: {
            first: '',
            prev: '',
            current: '',
            next: '',
            last: '',
        },
    };

    componentDidMount() {
        this.setState({
            lastPage: Math.ceil(this.props.postsCount / 12)
        }, this.setNewPagesLink);
    }

    componentDidUpdate(prevProps) {
        const { currentPage, postsCount } = this.props;
        if (currentPage !== prevProps.currentPage || postsCount !== prevProps.postsCount) {
            this.setState({
                lastPage: Math.ceil(this.props.postsCount / 12)
            }, this.setNewPagesLink);
        }
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
        return `${routes.mainPageLink}/${validPage}`;
    }

    getFirstLink = this.getLink.bind(this, () => 1);
    getPrevLink = this.getLink.bind(this, () => this.props.currentPage - 1);
    getCurrentLink = this.getLink.bind(this, () => this.props.currentPage);
    getNextLink = this.getLink.bind(this, () => this.props.currentPage + 1);
    getLastLink = this.getLink.bind(this, () => this.state.lastPage);



    render() {
        const curPage = this.props.currentPage;
        const { lastPage } = this.state;
        const { pagesLink } = this.state;
        
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
                        <Link to={pagesLink.next} className={cn('pagination__link', { 'pagination__link_disabled': lastPage === curPage })}>next</Link>
                    </li>
                    <li className="pagination__item">
                        <Link to={pagesLink.last} className="pagination__link">last</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Pagination;