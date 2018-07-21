import { createSelector } from "reselect";

const getPosts = (state) => state.posts;
export const postsSelector = createSelector(
    getPosts,
    posts => Object.values(posts),
);

const identity = value => value; // just return value for further processing in the selector
export const formatedPostSelector = createSelector(
    identity,
    post => {
        const postText = post.body.replace(/\n/g, '<br />');
        return { ...post, body: postText };
    },
);

export const formatedCommentsSelector = createSelector(
    identity,
    comments => {
        const formatedComments = comments.map(comment => {
            return { ...comment, body: comment.body.replace(/\n/g, '<br />') };
        });
        return formatedComments;
    },
);