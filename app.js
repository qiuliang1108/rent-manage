const path = require('path');
const Koa = require('koa');

//session
const session = require('./session');
const clearSession = require('./session/clear-session');

//user
const user = require('./middleware/user');

//log
const logger = require('koa-logger');

//is ajax
const isAjax = require('./middleware/is_ajax');

//static
const koaStatic = require('koa-static');
const koaStaticCache = require('koa-static-cache');

//解析post中的数据
const bodyParser = require('koa-bodyparser');

//info中间件
const info = require('./middleware/info');

//blue-tmpl中间件
const tmplViews = require('blue-tmpl-views');

//validform
const validform = require('./middleware/validform');

//配置文件
const config = require('./config');
const sessionConfig = require('./config/session-config');

//路由
const router = require('./router');

//session
const SessionStroe = require('./session/session-store');

//创建koa实例
const app = new Koa();

//info的中间件
app.use(info());

//验证中间件
app.use(validform());

//static缓存
app.use(koaStaticCache(path.join(__dirname, config.staticFile.path), {
  maxAge: 365 * 24 * 60 * 60,
  gzip: true
}));

//引入static的中间件
app.use(koaStatic(path.join(__dirname, config.staticFile.path), {
  maxAge: 365 * 24 * 60 * 60,
  gzip: true
}));

//引入bodyparser的中间件
app.use(bodyParser());

//session
app.use(session({
  key: sessionConfig.key,
  field: sessionConfig.field,
  store: new SessionStroe()
}));

app.use(user());

//清除无用的session
clearSession();

//配置blue-tmpl
app.use(tmplViews({
  path: config.views.path,
  ext: 'html'
}));

//检查是否ajax的状态
app.use(isAjax());

//log
app.use(logger());

//路由
app.use(router.routes(), router.allowedMethods());

app.listen(config.server.port, () => {
  console.log(`start server,listen:${config.server.port}`);
});



