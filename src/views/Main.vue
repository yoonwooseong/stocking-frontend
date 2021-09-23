<template>
  <div class="main">
    <div class="contents">
      <img alt="Vue logo" src="../assets/logo.png">
    </div>
    <div class="buttonArea">
      <router-link to="/stock" class="routerStockBtn">내 주식</router-link>
      <router-link to="/asset" class="routerAssetBtn" @click="testData">내 자산</router-link>
    </div>
  </div>
  <input v-model="message" placeholder="여기를 수정해보세요">
    <p>메시지: {{ message }}</p>
</template>

<script>
import { testAPI } from '@/api/api.js';

export default {
  name: 'Main',
  props: {

  },
  data: () => ({
    message:"",
    now:""
  } ),
  components:{
    
  },
  methods:{
    test2(){
      const param = {}
      const { data } = testAPI(param);
      console.log(data);
      this.$data.now = data.now;
    },
    async testData(){
      const param = {}
      const { data } = await testAPI(param);
      console.log("test Data !!!");
      console.log(data);
    }
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
