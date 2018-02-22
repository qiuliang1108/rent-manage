/*
* index控制器
* */
const Router = require('koa-router');
const router = new Router();
const config = require('../../../config');

const viewConfig = require('../../../config').views;
const commonModel = require('../model/common');

/*register*/
router.get('/register', async (ctx, next) => {
  await ctx.render(viewConfig.viewIndex);
});

/*login*/
router.get('/login', async (ctx, next) => {
  await ctx.render(viewConfig.viewIndex);
});

module.exports = router;