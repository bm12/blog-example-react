const routes = {};

routes.hostname = process.env.NODE_END !== 'production' ? process.env.REACT_APP_HOST_NAME : '';

export default routes;