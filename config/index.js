//配置全局的路径
process.path = {
  'root': process.cwd()
};

//默认配置信息
module.exports = {
  //路径相关
  staticFile: {
    path: "./static"
  },
  views: {
    path: "./views",
    viewIndex: "./app/dist/index"
  },
  //服务器相关
  server: {
    port: 3000
  }
 };