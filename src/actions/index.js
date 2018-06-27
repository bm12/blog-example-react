import { createAction } from "redux-actions";
import axios from "axios";
import routes from "../helpers/urls";
import { createAsyncActions } from "../helpers/reduxHelpers";

export const [fetchPostsRequest, fetchPostsSuccess, fetchPostsFailure] = createAsyncActions('POSTS_FETCH');
export const [fetchUsersRequest, fetchUsersSuccess, fetchUsersFailure] = createAsyncActions('USERS_FETCH');

export const [fetchPostAndUserRequest, fetchPostAndUserSuccess, fetchPostAndUserFailure] = createAsyncActions('POST_USER_FETCH');

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

export const fetchPostAndUserById = (postId) => async (dispatch) => {
    console.log(postId);
    dispatch(fetchPostAndUserRequest());
    try {
        const url = routes.getPostWithImgAndUser(postId);
        const res = await axios.get(url);
        const post = res.data;
        dispatch(fetchPostAndUserSuccess({ post }));
    } catch(err) {
        console.error(err);
        dispatch(fetchPostAndUserFailure());
    }
};
