import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import random from "lodash/random";
import Banner from '../Banner';
import Pagination from '../Pagination';
import BlogCardContainer from '../../containers/BlogCard';
import BlogCardPlaceholder from '../BlogCardPlaceholder';
import './main-page.css';


class MainPage extends PureComponent {
    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.shape({
                pageId: PropTypes.string.isRequired,
            }),
        }).isRequired,
        posts: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired,
        })),
        postsCount: PropTypes.number,
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

    render() {
        const { loaded } = this.props;
        const posts = loaded ?
            this.props.posts :
            Array(12).fill().map(() => ({ id: random(1000, 4000, true) })); //set the floating id, because the id from the server is int
        
        return (
            <main className="main-page">
                <Banner />
                <div className="blogs-list">
                    <div className="container">
                        <div className="row no-gutters">
                        {posts.map((post) => 
                            <BlogCardPlaceholder key={post.id} ready={loaded} >
                                <BlogCardContainer id={post.id} />
                            </BlogCardPlaceholder>)}
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