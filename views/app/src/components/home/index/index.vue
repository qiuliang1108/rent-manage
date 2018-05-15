<template>
  <div class="row f-0_9 pd-20">
    <!--登录 注册-->
    <div class="row t-c" v-if="!rootState.isLogin.member">
      <div class="row">
        <router-link to="/manage" class="g-btn g-btn-radius g-btn-primary">manage login</router-link>
        <router-link to="/common/login" class="g-btn g-btn-radius g-btn-primary">login</router-link>
        <router-link to="/common/register" class="g-btn g-btn-radius g-btn-danger">register</router-link>
      </div>
      <div class="row f-0_8 t-red t-c pd-tb-3">
        (只限于该楼层的用户使用)
      </div>
    </div>

    <div class="g-panel g-panel-primary mg-t-10 border-radius">
      <div class="g-panel-title t-white">
        公告
      </div>

      <div class="row t-c pd-15">
        <template>
          公告信息
        </template>
        <template>
          没有新公告信息
        </template>
      </div>
    </div>
  </div>
</template>

<script>

  const storeName = 'home/routes/';

  export default {
    data() {
      return {
        state: this.$store.state.home.index,
        rootState: this.$store.state
      }
    },
    created() {
      // this.$axios.get(this.$api.getApi('')).then((res) => {
      //   console.log(res);
      // });
    },
    mounted() {
      this.$store.commit('home/changeHeaderStore', {title: 'rent-home'});
      /*this.bluelayer.msg({ content: '123' });
      this.bluelayer.msg({ content: '123', icon: 1 });
      this.bluelayer.msg({ content: '123', icon: 2 });
      this.bluelayer.open({ content: '123', type: 2 });
      this.bluelayer.open({ content: '123', type: 2, title: false });*/
    }
  }
</script>









