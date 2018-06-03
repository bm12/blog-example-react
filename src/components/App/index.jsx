import React, { Component } from 'react';
import axios from 'axios';
import routes from '../../helpers/urls';
import Header from '../Header';
import Banner from '../Banner';
import BlogCard from '../BlogCard';
import Pagination from '../Pagination';
import './style.css';


class App extends Component {
    state = {
        posts: [],
        currentPage: 1,
        postsCount: 0,
    }

    componentDidMount() {
        console.log(process.env.REACT_APP_HOST_NAME);
        this.loadNewPosts(`${routes.hostname}/posts?_page=1&_limit=12`);
    }

    loadNewPosts = async (url, currentPage = 1) => {
        const res = await axios.get(url);
        this.setState({
            posts: res.data,
            postsCount: Number(res.headers['x-total-count']),
            currentPage,
        });
    }

    render() {
        const { posts } = this.state;
        return (
            <div className="wraper">
                <Header />
                <main className="main-page">
                    <Banner />
                    <div className="blogs-list">
                        <div className="container">
                            <div className="row no-gutters">
                                {posts.map((post) => <BlogCard key={post.id} title={post.title} id={post.id} />)}
                            </div>
                            <Pagination 
                                loadNewPosts={this.loadNewPosts}
                                currentPage={this.state.currentPage}
                                postsCount={this.state.postsCount} />
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}

export default App;
