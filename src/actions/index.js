import { createAction } from "redux-actions";
import axios from "axios";
import routes from "../helpers/urls";
import { createAsyncActions } from "../helpers/reduxHelpers";

export const [fetchPostsRequest, fetchPostsSuccess, fetchPostsFailure] = createAsyncActions('POSTS_FETCH');
export const [fetchUsersRequest, fetchUsersSuccess, fetchUsersFailure] = createAsyncActions('USERS_FETCH');
export const [fetchCommentsRequest, fetchCommentsSuccess, fetchCommentsFailure] = createAsyncActions('COMMENTS_FETCH');

export const [fetchPostAndUserRequest, fetchPostAndUserSuccess, fetchPostAndUserFailure] = createAsyncActions('POST_USER_FETCH');

export const networkStateChanged = createAction('NETWORk_STATE_CHANGED');

export const listenNetworkState = () => (dispatch) => {
    const networkListener = () => {
        dispatch(networkStateChanged({ isOnline: navigator.onLine }));
    };

    window.addEventListener('online', networkListener);
    window.addEventListener('offline', networkListener);

    networkListener();
}

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
        dispatch(fetchUsersFailure(err));
    }
};

export const fetchPostAndUserById = (postId) => async (dispatch) => {
    dispatch(fetchPostAndUserRequest());
    try {
        const url = routes.getPostUrl(postId);
        const res = await axios.get(url);
        const post = res.data;
        dispatch(fetchPostAndUserSuccess({ post }));
        dispatch(fetchUsers([post]));
    } catch(err) {
        console.error(err);
        dispatch(fetchPostAndUserFailure(err));
    }
};

export const fetchCommentsByPostId = (postId) => async (dispatch) => {
    dispatch(fetchCommentsRequest());
    try {
        const url = routes.getCommentsUrl(postId);
        const res = await axios.get(url);
        const comments = res.data;
        dispatch(fetchCommentsSuccess({ comments, postId }));
    } catch(err) {
        console.error(err);
        dispatch(fetchCommentsFailure(err));
    }
};

export const prefetchPostById = (postId) => () => {
    const postUrl = routes.getPostUrl(postId);
    const commentUrl = routes.getCommentsUrl(postId);

    if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
        navigator.serviceWorker.controller.postMessage({
            type: 'prefetch',
            urls: [
                postUrl,
                commentUrl,
            ],
        });
    }
};