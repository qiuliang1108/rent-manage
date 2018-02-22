<template>
  <form action="" class="row valiform" method="post" @submit="$validate($event)">

    <div class="g-flex g-flex-ai-c pd-10"> <!--g-flex-jc-c -->
      <div class="g-flex-1 t-r">
        用户名：
      </div>
      <div class="g-flex-4">
        <input type="text" class="g-input g-input-radius w-80" name="username" v-validate="[{type:'*'},{type:'n'}]" data-tip-elm="#v1">
      </div>
    </div>
    <div id="v1" class="t-red t-c"></div>
    <div class="g-flex g-flex-ai-c pd-10"> <!--g-flex-jc-c -->
      <div class="g-flex-1 t-r">
        密码：
      </div>
      <div class="g-flex-4">
        <input type="password" class="g-input g-input-radius w-80" name="password" v-validate="[{type:'*'},{type:'n'},{type:/\d{3}/,info:'最少三位数'}]" data-tip-elm="#v2">
      </div>
    </div>
    <div id="v2" class="t-red t-c"></div>
    <div class="row t-c">
      <button type="submit" class="g-btn g-btn-primary">登录</button>
      <router-link to="/common/register" class="g-btn g-btn-success">注册</router-link>
    </div>
  </form>
</template>
