import { connect } from "react-redux";
import Component from "../components/MainPage";
import { postsSelector } from "../selectors";
import { fetchPosts } from "../actions";

const mapStateToProps = (state) => {
    if (state.postsFetchingState !== 'successed' || state.usersFetchingState !== 'successed') {
        return { loaded: false };
    }

    return {
        posts: postsSelector(state),
        postsCount: state.postsCount,
        loaded: true,
    }
};

export default connect(mapStateToProps, { fetchPosts })(Component);