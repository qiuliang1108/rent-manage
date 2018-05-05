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
  if(ctx.IS_AJAX){
    ctx.body = {
      status:1,
      info:'success',
      url:''
    };
  }
  await ctx.render(viewConfig.viewIndex);
});

router.get('/test', async (ctx, next) => {
  ctx.body = {
    a: 1,
    b: 2
  }
});

module.exports = router;