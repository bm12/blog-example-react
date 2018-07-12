import { connect } from "react-redux";
import Component from "../components/PostPage";
import { fetchPostAndUserById } from "../actions";
import { formatedPostSelector } from "../selectors";

const mapStateToProps = (state, { match }) => {
    const { postId } = match.params;
    const post = state.postPage[postId];

    if (!post) return { loaded: false };

    const newPost = formatedPostSelector(post);

    return { post: newPost, loaded: true };
};

export default connect(mapStateToProps, { fetchPostAndUserById })(Component);