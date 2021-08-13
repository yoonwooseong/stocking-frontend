<template>
  <div class="main">
    <div class="contents">
      <img alt="Vue logo" src="../assets/logo.png">
    </div>
    <div class="buttonArea">
      <router-link to="/stock" class="routerStockBtn" >내 주식</router-link>
      <router-link to="/asset" class="routerAssetBtn" >내 자산</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Main',
  props: {

  },
  components:{
    
  }
}
</script>

<style scoped>
  .buttonArea {
    margin-top: 50px;
  }
  .routerStockBtn {
    margin-left: 5%;
    float:left;
  }
  .routerAssetBtn {
    margin-right: 5%;
    float:right;
  }
</style>
