import React, { Component } from 'react';
import axios from 'axios';
import routes from '../../helpers/urls'
import Header from '../Header'
import Banner from '../Banner';
import BlogCard from '../BlogCard';
import './style.css';


class App extends Component {
  state = {
    posts: [],
  }
  async componentDidMount() {
    console.log(process.env.REACT_APP_HOST_NAME);
    const res = await axios.get(`${routes.hostname}/posts?_page=1&_limit=12`);
    this.setState({ posts: res.data });
  }

  render() {
    const { posts } = this.state;
    console.log('render');
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
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
