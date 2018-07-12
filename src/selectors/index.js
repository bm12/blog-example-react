import { createSelector } from "reselect";

const getPosts = (state) => state.posts;
export const postsSelector = createSelector(
    getPosts,
    posts => Object.values(posts),
);

export const formatedPostSelector = createSelector(
    post => post,
    post => {
        const postText = post.body.replace(/\n/g, '<br />');
        return { ...post, body: postText };
    },
);