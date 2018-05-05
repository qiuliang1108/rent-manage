<template>
  <div class="row">
    <form action="" class="row valiform" method="post" @submit="$validate">

      <div class="g-flex g-flex-ai-c pd-10"> <!--g-flex-jc-c -->
        <div class="g-flex-1 t-r">
          用户名：
        </div>
        <div class="g-flex-4">
          <input type="text" class="g-input g-input-radius w-80" name="username" v-validate="[{type:'n'}]" placeholder="输入正确的用户名/手机">
        </div>
      </div>

      <div class="row t-c pd-10" data-bind="username" style="display: none;"></div>

      <div id="v1" class="t-red t-c"></div>
      <div class="g-flex g-flex-ai-c pd-10"> <!--g-flex-jc-c -->
        <div class="g-flex-1 t-r">
          密码：
        </div>
        <div class="g-flex-4">
          <input type="password" class="g-input g-input-radius w-80" name="password" v-validate="[{type:'*'},{type:'n'},{type:/\d{3}/,info:'最少三位数'}]">
        </div>
      </div>

      <div class="row t-c pd-10" data-bind="password" style="display: none"></div>

      <div class="row t-c">
        <button type="submit" class="g-btn g-btn-primary">登录</button>
        <router-link to="/common/register" class="g-btn g-btn-success">注册</router-link>
        <button type="button" @click="test" class="g-btn g-btn-danger">test</button>
      </div>

    </form>
  </div>
</template>

<script>

  import blueLayer from 'blue-layer';

  export default {
    methods: {
      test(event) {
        debugger;
        this.ask.get({
          url: this.$api.getApi('/common/test'),
          content:'老司机',
          confirm: true,
          form: event.target.form,
          callback(){
            console.log(1)
          }
        });
      }
    }
  }
</script>
