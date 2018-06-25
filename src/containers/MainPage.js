import { connect } from "react-redux";
import Component from "../components/MainPage";
import { postsSelector, usersSelector } from "../selectors";
import * as actionCreators from "../actions";

const mapStateToProps = (state) => ({
    posts: postsSelector(state),
    postsCount: state.postsCount,
    users: usersSelector(state),
});

export default connect(mapStateToProps, actionCreators)(Component);