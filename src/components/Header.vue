<template>
  <div class="header">
    <div class="prevBtn" @click="prevPage()">뒤로가기</div>
    
    <div class="headerBtn">
      <div class="btn" @click="signIn()">로그인</div>
      <div class="btn" @click="signUp()">회원가입</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    
  },
  methods: {
    prevPage() {
      console.log(this.$router.name);
      this.$router.go(-1);
    },
  
    signIn() {
      alert("!")
      this.$router.push({ path: 'signIn', query: { id: 'ex1' }})
    },

    signUp() {
      this.$router.push({ path: 'signUp', query: { id: 'ex2' }})
      alert("!?")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{
  margin-top: 2%;
}
.headerBtn{
  margin-right: 5%;
  float:right;
}
.headerBtn .btn{
  margin: 1px;
}
.prevBtn{
  margin-left: 5%;
  float:left;
}
</style>
