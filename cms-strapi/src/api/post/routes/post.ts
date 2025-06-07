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
  ],
};
