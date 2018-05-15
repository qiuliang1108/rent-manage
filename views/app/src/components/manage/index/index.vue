<template>
    <div class="row f-0_9 pd-20">

        <!--登录 注册-->
        <div class="row t-c" v-if="!rootState.isLogin.manage">
          <div class="row">
            <router-link to="/manage/common/login" class="g-btn g-btn-radius g-btn-primary">login</router-link>
          </div>
          <div class="row f-0_8 t-red t-c pd-tb-3">
            (房东管理员使用)
          </div>
        </div>

        <div class="g-panel g-panel-primary mg-t-10 border-radius">

            <div class="g-panel-title t-white">
                数据统计
            </div>

            <div class="row pd-15">

            </div>
        </div>
    </div>
</template>

<script>

  /*
  * store namespaced
  * */

  const storeName = 'home/routes/';

  export default {
    data() {
      return {
        state: this.$store.state.home.index,
        rootState: this.$store.state
      }
    },
    mounted() {

    }
  }
</script>
