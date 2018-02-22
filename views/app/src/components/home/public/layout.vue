<template>
  <div class="row f-0_9">
    <transition :name="transitionName" mode="out-in">
      <router-view name="header"></router-view>
    </transition>
    <transition :name="transitionName" mode="out-in">
      <router-view name="body"></router-view>
    </transition>
    <transition :name="transitionName" mode="out-in">
      <router-view name="footer"></router-view>
    </transition>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        transitionName: 'slide-right'
      }
    },
    watch: {
      '$route'(to, from) {
        const toDepth = to.path.split('/').length;
        const fromDepth = from.path.split('/').length;
        this.transitionName = toDepth < fromDepth ? 'slide-left' : 'slide-right';
      }
    }
  }
</script>

<style lang="scss">
  .slide-left-enter-active, .slide-left-leave-active, .slide-right-enter-active, .slide-right-leave-active {
    transition: all .2s;
  }

  .slide-left-enter, .slide-left-leave-active, .slide-right-enter, .slide-right-leave-active {
    opacity: 0;
  }

  .slide-right-enter {
    transform: translateX(100px);
  }

  .slide-right-leave-active {
    transform: translateX(-100px);
  }

  .slide-left-enter {
    transform: translateX(-100px);
  }

  .slide-left-leave-active {
    transform: translateX(100px);
  }

</style>

