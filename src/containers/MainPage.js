import { connect } from "react-redux";
import Component from "../components/MainPage";
import { postsSelector, usersSelector } from "../selectors";
import { fetchPosts } from "../actions";

const mapStateToProps = (state) => ({
    posts: postsSelector(state),
    postsCount: state.postsCount,
    users: usersSelector(state),
});

export default connect(mapStateToProps, { fetchPosts })(Component);