import React, { Component } from 'react';
import cn from 'classnames';
import routes from '../../helpers/urls';
import './Pagination.css'

class Pagination extends Component {

    state = { lastPage: 0 };

    static getDerivedStateFromProps(props, state) {
        return { ...state, lastPage: Math.ceil(props.postsCount / 12)};
    }

    getUrl(page) {
        return `${routes.hostname}/posts?_page=${page}&_limit=12&_embed=images`;
    }

    onLinkClick = (getPageNumber, e) => {
        e.preventDefault();
        const { lastPage } = this.state;
        const page = getPageNumber();
        const validPage = page < 1 ? 1 : page > lastPage ? lastPage : page;
        this.props.loadNewPosts(this.getUrl(validPage), validPage);
    };

    onFirstClick = this.onLinkClick.bind(this, () => 1);
    onPrevClick = this.onLinkClick.bind(this, () => this.props.currentPage - 1);
    onCurrentClick = this.onLinkClick.bind(this, () => this.props.currentPage);
    onNextClick = this.onLinkClick.bind(this, () => this.props.currentPage + 1);
    onLastClick = this.onLinkClick.bind(this, () => this.state.lastPage);

    render() {
        const curPage = this.props.currentPage;
        const { lastPage } = this.state;
        
        return (
            <nav className="row pagination">
                <ul className="pagination__list">
                    <li className="pagination__item">
                        <a href="#" onClick={this.onFirstClick} className="pagination__link">first</a>
                    </li>
                    <li className="pagination__item">
                        <a href="#" onClick={this.onPrevClick} className={cn('pagination__link', { 'pagination__link_disabled': !(curPage - 1) })}>prev</a>
                    </li>
                    <li className="pagination__item">
                        <a href="#" onClick={this.onCurrentClick} className="pagination__link pagination__link_active">{curPage}</a>
                    </li>
                    <li className="pagination__item">
                        <a href="#" onClick={this.onNextClick} className={cn('pagination__link', { 'pagination__link_disabled': lastPage === curPage })}>next</a>
                    </li>
                    <li className="pagination__item">
                        <a href="#" onClick={this.onLastClick} className="pagination__link">last</a>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Pagination;