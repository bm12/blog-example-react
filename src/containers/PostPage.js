import { connect } from "react-redux";
import Component from "../components/PostPage";
import { fetchPostAndUserById, fetchCommentsByPostId } from "../actions";
import { formatedPostSelector } from "../selectors";

const mapStateToProps = (state, { match }) => {
    const { postId } = match.params;
    const post = state.posts[postId];
    const comments = state.comments[postId];

    if (!post || !comments) return { loaded: false };

    const user = state.users[post.userId];

    if (!user) return { loaded: false };

    const newPost = formatedPostSelector(post);
    const newComments = comments.map(comment => ({ ...comment, body: comment.body.replace(/\n/g, '<br />') }));

    return {
        user,
        post: newPost,
        comments: newComments,
        loaded: true,
    };
};

export default connect(mapStateToProps, { fetchPostAndUserById, fetchCommentsByPostId })(Component);