const Router = require('koa-router');

const router = new Router();

//index cotroller
const homeController = require('./home');

//manage cotroller
const manageController = require('./manage');

//index路由
router.use('', homeController.routes(), homeController.allowedMethods());

router.use('/manage', manageController.routes(), manageController.allowedMethods());

module.exports = router;