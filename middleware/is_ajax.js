module.exports = () => {
  return async (ctx,next)=>{
    const header = ctx.req.headers;
    if(header['x-requested-with'] && header['x-requested-with'] === 'XMLHttpRequest'){
      ctx.isAjax = true;
    }else{
      ctx.isAjax = false;
    }
    return next();
  }
}