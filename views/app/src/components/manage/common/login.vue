<template>
  <form action="" class="row valiform" method="post">
    <div class="g-flex g-flex-ai-c pd-10"> <!--g-flex-jc-c -->
      <div class="g-flex-1 t-r">
        用户名：
      </div>
      <div class="g-flex-4">
        <input type="text" class="g-input g-input-radius w-80" name="username" value="azhanging">
      </div>
    </div>
    <div class="g-flex g-flex-ai-c pd-10"> <!--g-flex-jc-c -->
      <div class="g-flex-1 t-r">
        密码：
      </div>
      <div class="g-flex-4">
        <input type="password" class="g-input g-input-radius w-80" name="password" value="123456">
      </div>
    </div>
    <div class="row t-c">
      <button type="submit" class="g-btn g-btn-primary">登录</button>
    </div>
  </form>
</template>

<script>
  export default {
    mounted(){

    }
  }
</script>
