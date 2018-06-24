import { createAction } from "redux-actions";
import axios from "axios";
import routes from "../helpers/urls";

export const fetchPostsRequest = createAction('POSTS_FETCH_REQUESTED');
export const fetchPostsSuccess = createAction('POSTS_FETCH_SUCCESS');
export const fetchPostsFailure = createAction('POSTS_FETCH_FAILURE');

export const fetchUsersRequest = createAction('USERS_FETCH_REQUESTED');
export const fetchUsersSuccess = createAction('USERS_FETCH_SUCCESS');
export const fetchUsersFailure = createAction('USERS_FETCH_FAILURE');

export const fetchPosts = (pageId) => async (dispatch) => {
    dispatch(fetchPostsRequest());
    try {
        const url = routes.getPageUrl(pageId);
        const res = await axios.get(url);
        const posts = res.data;
        dispatch(fetchPostsSuccess({ posts, postsCount: Number(res.headers['x-total-count']) }));
        dispatch(fetchUsers(posts));
    } catch(err) {
        console.error(err);
        dispatch(fetchPostsFailure());
    }
};
export const fetchUsers = (posts) => async (dispatch) => {
    dispatch(fetchUsersRequest());
    try {
        const usersIdString = posts.map(post => `id=${post.userId}`).join('&');
        const res = await axios.get(routes.getUsersUrl(usersIdString))
        dispatch(fetchUsersSuccess({ users: res.data }));
    } catch(err) {
        console.error(err);
        dispatch(fetchUsersFailure());
    }
};