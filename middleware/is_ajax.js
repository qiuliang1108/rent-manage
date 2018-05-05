module.exports = () => {
  return async (ctx,next)=>{
    const header = ctx.req.headers;
    if(header['x-requested-with'] && header['x-requested-with'] === 'XMLHttpRequest'){
      ctx.IS_AJAX = true;
    }else{
      ctx.IS_AJAX = false;
    }
    return next();
  }
}