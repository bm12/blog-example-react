import { createSelector } from "reselect";

const getPosts = (state) => state.posts;
export const postsSelector = createSelector(
    getPosts,
    posts => Object.values(posts),
);

const getUsers = (state) => state.users;
export const usersSelector = createSelector(
    getUsers,
    users => Object.values(users),
);