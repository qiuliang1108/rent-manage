<template>
  <div class="g-flex pd-10 g-bg-primary g-bg-white g-flex-ai-c f-1">
    <div class="g-flex-1" v-if="state.hasUrl">
      <a :href="state.url">
        <span class="g-arrow g-arrow-l g-arrow-small bd-white"></span>
      </a>
    </div>
    <div class="g-flex-4 t-hide t-white t-c">
      {{state.title}}
    </div>
    <div class="g-flex-1">

    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        rootState: this.$store.state,
        state: this.$store.state.home.header
      }
    }
  }
</script>
