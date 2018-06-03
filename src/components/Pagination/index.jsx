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
        return `${routes.hostname}/posts?_page=${page}&_limit=12`;
    }

    onFirstClick = (e) => {
        e.preventDefault();
        this.props.loadNewPosts(this.getUrl(1));
    };

    onPrevClick = (e) => {
        e.preventDefault();
        const prevPage = this.props.currentPage - 1;
        this.props.loadNewPosts(this.getUrl(prevPage), prevPage);
    };

    onCurrentClick = (e) => {
        e.preventDefault();
        this.props.loadNewPosts(this.getUrl(this.props.currentPage), this.props.currentPage);
    };

    onNextClick = (e) => {
        e.preventDefault();
        const nextPage = this.props.currentPage + 1;
        this.props.loadNewPosts(this.getUrl(nextPage), nextPage);
    };

    onLastClick = (e) => {
        e.preventDefault();
        this.props.loadNewPosts(this.getUrl(this.state.lastPage), this.state.lastPage);
    };

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