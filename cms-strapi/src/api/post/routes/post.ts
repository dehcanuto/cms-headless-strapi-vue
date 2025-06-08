export default {
  routes: [
    {
     method: 'GET',
     path: '/post',
     handler: 'post.findAll',
     config: {
       policies: [],
       middlewares: [],
     },
    },
    {
     method: 'GET',
     path: '/post/:slug',
     handler: 'post.findBySlug',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
