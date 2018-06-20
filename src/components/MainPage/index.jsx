import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import routes from '../../helpers/urls';
import Banner from '../Banner';
import BlogCard from '../BlogCard';
import Pagination from '../Pagination';
import './main-page.css';


class MainPage extends Component {
    state = {
        posts: [],
        postsCount: 0,
        users: [],
    };

    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.shape({
                pageId: PropTypes.string.isRequired,
            }),
        }),
    };

    componentDidMount() {
        const { pageId } = this.props.match.params;
        this.loadNewPosts(routes.getPageUrl(pageId));
    }

    componentDidUpdate(prevProps) {
        const { pageId } = this.props.match.params;
        const prevPageId = prevProps.match.params.pageId;
        if (pageId !== prevPageId) {
            this.loadNewPosts(routes.getPageUrl(pageId));
        }
    }

    loadNewPosts = async (url) => {
        const postsResp = await axios.get(url);
        const usersResp = await axios.get(routes.getUsersUrlWithId(postsResp.data))
        this.setState({
            posts: postsResp.data,
            postsCount: Number(postsResp.headers['x-total-count']),
            users: usersResp.data,
        });
    };

    getUserById = (id) => {
        return this.state.users.find(user => user.id === id);
    };

    render() {
        const { posts } = this.state;
        return (
            <main className="main-page">
                <Banner />
                <div className="blogs-list">
                    <div className="container">
                        <div className="row no-gutters">
                            {posts.map((post) =>
                                <BlogCard
                                    key={post.id}
                                    post={post}
                                    getUserById={this.getUserById} />)}
                        </div>
                        <Pagination
                            currentPage={Number(this.props.match.params.pageId)}
                            postsCount={this.state.postsCount} />
                    </div>
                </div>
            </main>
        );
    }
}

export default MainPage;