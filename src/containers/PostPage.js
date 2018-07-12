import { connect } from "react-redux";
import Component from "../components/PostPage";
import { fetchPostAndUserById } from "../actions";

const mapStateToProps = (state, { match }) => {
    const { postId } = match.params;
    const post = state.postPage[postId];
    
    if (!post) return { loaded: false };

    const postText = post.body.replace(/\n/g, '<br />');
    const newPost = { ...post, body: postText };
    
    return { post: newPost, loaded: true };
};

export default connect(mapStateToProps, { fetchPostAndUserById })(Component);