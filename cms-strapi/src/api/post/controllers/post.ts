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
      status: 'published',
      filters: { slug },
      limit: 1,
    });

    if (!posts || posts.length === 0) {
      return ctx.notFound('Post não encontrado');
    }

    return posts[0];
  },
  async create(ctx) {
    try {
      const { data } = ctx.request.body;

      if (!data?.title || !data?.content || !data?.description || !data?.slug) {
        return ctx.badRequest('Insert all fields');
      }

      const response = await strapi.entityService.create('api::post.post', {
        data,
      });

      return ctx.send(response, 201);
    } catch (error) {
      return ctx.internalServerError('Failed to create post', error);
    }
  },
};
