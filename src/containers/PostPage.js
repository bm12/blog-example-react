import { connect } from "react-redux";
import Component from "../components/PostPage";
import { fetchPostAndUserById } from "../actions";
import { formatedPostSelector } from "../selectors";

const mapStateToProps = (state, { match }) => {
    const { postId } = match.params;
    const post = state.posts[postId];

    if (!post) return { loaded: false };

    const user = state.users[post.userId];

    if (!user) return { loaded: false };

    const newPost = formatedPostSelector(post);

    return { post: newPost, user, loaded: true };
};

export default connect(mapStateToProps, { fetchPostAndUserById })(Component);