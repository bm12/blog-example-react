import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions'
import keyBy from "lodash/keyBy";
import * as actions from '../actions';
import { asyncActionsStateReducer } from "../helpers/reduxHelpers";

const postsFetchingState = asyncActionsStateReducer({
    actionRequest: actions.fetchPostsRequest,
    actionSuccess: actions.fetchPostsSuccess,
    actionFailure: actions.fetchPostsFailure,
});
const usersFetchingState = asyncActionsStateReducer({
    actionRequest: actions.fetchUsersRequest,
    actionSuccess: actions.fetchUsersSuccess,
    actionFailure: actions.fetchUsersFailure,
});

const posts = handleActions({
    [actions.fetchPostsSuccess](state, { payload: { posts } }) {
        return keyBy(posts, 'id');
    },
    [actions.fetchPostAndUserSuccess](state, { payload: { post } }) {
        return { [post.id]: post };
    },
}, {});
const postsCount = handleActions({
    [actions.fetchPostsSuccess](state, { payload: { postsCount } }) {
        return postsCount;
    },
}, 0);
const users = handleActions({
    [actions.fetchUsersSuccess](state, { payload: { users } }) {
        return keyBy(users, 'id');
    },
}, {});

export default combineReducers({
    postsFetchingState,
    usersFetchingState,
    posts,
    postsCount,
    users,
});