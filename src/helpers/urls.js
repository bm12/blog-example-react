const routes = {};

routes.hostname = process.env.REACT_APP_HOST_NAME;
routes.getPageUrl = (page = 1) => `${routes.hostname}/posts?_page=${page}&_limit=12&_embed=images`
routes.getPostWithImgAndUser = (post = 1) => `${routes.hostname}/posts/${post}?_embed=images&_expand=user`

export default routes;