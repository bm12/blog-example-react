import { connect } from "react-redux";
import Component from "../components/MainPage";
import * as actionCreators from "../actions";

const mapStateToProps = ({ posts, postsCount, users }) => ({
    posts: Object.values(posts),
    postsCount,
    users: Object.values(users),
});

export default connect(mapStateToProps, actionCreators)(Component);