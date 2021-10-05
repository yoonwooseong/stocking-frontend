<template>
  <div class="main">
    <div class="contents">
      <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
      <div class="contentTopBox">
        <small class="subTitle">보유 주식을 한눈에 !</small>
        <router-link to="/stock"><h1 class="title">스톡</h1></router-link>
      </div>
      <div class="contentBottomBox">
        <small class="subTitle2">내 자산을 차곡차곡</small>
        <router-link to="/asset" @click="testData"><h1 class="title">에셋</h1></router-link>
      </div>
    </div>
    <h3 class="featureTitle">주식과 자산을 한번에 보기 힘드셨죠?<strong>STOCK에서 가능합니다</strong></h3>
  </div>

  <!-- <input v-model="message" placeholder="여기를 수정해보세요">
    <p>메시지: {{ message }}</p> -->
</template>

<script>

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
    
  }
   
}
</script>

<style scoped>
a { text-decoration:none }
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
  .contents {
    position: relative;
    display: block;
    overflow: hidden;
    width: 100%;
    height: 50%;
    background: #04c584;
  }
  .contents:before{
      position: absolute;
      top: 70%;
      right: -25%;
      bottom: auto;
      left: auto;
      -webkit-transform: rotate(
  343deg);
      -ms-transform: rotate(343deg);
      transform: rotate(
  343deg);
      display: block;
      width: 200%;
      height: 2000px;
      background: #10df99;
      -webkit-transform-origin: 50% 0;
      -ms-transform-origin: 50% 0;
      transform-origin: 50% 0;
      content: "";
  }
  .contentTopBox{
    display: block;
    width: 100%;
    max-width: 946px;
    height: 0%;
    margin: 0 auto;
    padding: 130px 16px 0;
  }
  .contentBottomBox{
    text-align: right;
    display: block;
    width: 100%;
    max-width: 946px;
    height: 0%;
    margin: 0 auto;
    padding: 130px 16px 80px;
  }
  .title{
    position: relative;
    display: block;
    color: #fff;
    font-size: 42px;
    font-weight: 700;
    line-height: 1;
  }
  .subTitle{
    display: block;
    margin: 0 0 16px;
    color: #fff;
    font-size: 28px;
    font-weight: 400;
    line-height: 1;
  }
  .subTitle2{
    display: block;
    margin: 0 0 16px;
    color: #fff;
    font-size: 28px;
    font-weight: 400;
    line-height: 1;
    position: relative;
    
  }
  .stockBtn{
    position: absolute;
    top: calc(50% - 200px);
    right: auto;
    bottom: auto;
    
    display: block;
    width: 32px;
    height: 32px;
    color: transparent;
    font-size: 0;
  }
  .assetBtn{
    position: absolute;
    top: calc(50% + 160px);
    right: 60px;
    bottom: auto;
    
    display: block;
    width: 32px;
    height: 32px;
    color: transparent;
    font-size: 0;
  }
  .featureTitle {
    display: block;
    color: #7b7b7b;
    font-size: 18px;
    line-height: 1.2;
    text-align: center;

}
.featureTitle>strong {
    display: block;
    margin: 12px 0 0;
    color: #0b0c0c;
    font-size: 28px;
    font-weight: 500;
    letter-spacing: -2px;
}
</style>
