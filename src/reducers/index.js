import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions'
import * as actions from '../actions';
import keyBy from "lodash/keyBy";

const postsFetchingState = handleActions({
    [actions.fetchPostsRequest]() {
        return 'requested';
    },
    [actions.fetchPostsFailure]() {
        return 'failed';
    },
    [actions.fetchPostsSuccess]() {
        return 'successed';
    },
}, 'none');
const usersFetchingState = handleActions({
    [actions.fetchUsersRequest]() {
        return 'requested';
    },
    [actions.fetchUsersFailure]() {
        return 'failed';
    },
    [actions.fetchUsersSuccess]() {
        return 'successed';
    },
}, 'none');

const posts = handleActions({
    [actions.fetchPostsSuccess](state, { payload: { posts } }) {
        return keyBy(posts, 'id');
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