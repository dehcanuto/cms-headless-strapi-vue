/**
 * A set of functions called "actions" for `posts`
 */
declare const strapi: any;

export default {
  exampleAction: async (ctx, next) => {
    try {
      ctx.body = 'Hello from exampleAction';
    } catch (err) {
      ctx.body = err;
    }
  },
  async findAll(ctx) {
    try {
      const posts = await strapi.entityService.findMany('api::post.post', {
        populate: '*',
      });
      ctx.body = posts;
    } catch (err) {
      ctx.body = err;
    }
  },
};
