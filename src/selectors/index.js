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

export const formatedCommentsSelector = createSelector(
    comments => comments,
    comments => {
        const formatedComments = comments.map(comment => {
            return { ...comment, body: comment.body.replace(/\n/g, '<br />') };
        });
        return formatedComments;
    },
);