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
      const posts = await strapi.documents("api::post.post").findMany({
        status: 'published',
        sort: "createdAt:desc",
      });

      ctx.body = posts;
    } catch (err) {
      ctx.body = err;
    }
  },
  async findBySlug(ctx) {
    const { slug } = ctx.params;

    const posts = await strapi.entityService.findMany('api::post.post', {
      filters: { slug },
      limit: 1,
    });

    if (!posts || posts.length === 0) {
      return ctx.notFound('Post não encontrado');
    }

    return posts[0];
  },
};
