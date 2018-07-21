const routes = {};

routes.hostname = process.env.REACT_APP_HOST_NAME;

routes.getPageUrl = (page = 1) => `${routes.hostname}/api/posts?_page=${page}&_limit=12&_embed=images`;
routes.getPostUrl = (postId) => `${routes.hostname}/api/posts/${postId}?_embed=images`;
routes.getUsersUrl = (idsString = '' ) => `${routes.hostname}/api/users?${idsString}`;
routes.getPostWithImgAndUser = (post = 1) => `${routes.hostname}/api/posts/${post}?_embed=images&_expand=user`;
routes.getCommentsUrl = (postId) => `${routes.hostname}/api/comments?postId=${postId}`;

export default routes;