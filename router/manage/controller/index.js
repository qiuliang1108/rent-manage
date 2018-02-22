/*
* index控制器
* */
const Router = require('koa-router');
const router = new Router();
const indexModel = require('../model/index');
const viewConfig = require('../../../config').views;

/*home*/
router.get('/', async (ctx, next) => {
  await ctx.render(viewConfig.viewIndex);
});

module.exports = router;