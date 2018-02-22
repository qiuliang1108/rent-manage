/*
* 大模块router处理
* */

const Router = require('koa-router');
const router = new Router();

const login = require('../../middleware/login');

//routes controller
const indexRouter = require('./controller/index');
router.use('', indexRouter.routes(), indexRouter.allowedMethods());

//common controller
const commonRouter = require('./controller/common');
router.use('/common', commonRouter.routes(), commonRouter.allowedMethods());

module.exports = router;