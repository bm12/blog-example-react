import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Banner from '../Banner';
import BlogCard from '../BlogCard';
import Pagination from '../Pagination';
import './main-page.css';


class MainPage extends PureComponent {
    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.shape({
                pageId: PropTypes.string.isRequired,
            }),
        }),
    };

    componentDidMount() {
        const { pageId } = this.props.match.params;
        this.props.fetchPosts(pageId);
    }

    componentDidUpdate(prevProps) {
        const { pageId } = this.props.match.params;
        const prevPageId = prevProps.match.params.pageId;
        if (pageId !== prevPageId) {
            this.props.fetchPosts(pageId);
        }
    }

    getUserById = (id) => {
        return this.props.users.find(user => user.id === id);
    };

    render() {
        const { posts } = this.props;
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
                            postsCount={this.props.postsCount} />
                    </div>
                </div>
            </main>
        );
    }
}

export default MainPage;