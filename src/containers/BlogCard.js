import { connect } from "react-redux";
import Component from "../components/BlogCard";

const mapStateToProps = (state, { id }) => {
    const post = state.posts[id];
    const user = state.users[post.userId] || {};
    return { post, user };
};

export default connect(mapStateToProps)(Component);