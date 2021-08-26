<template>
  <div>
    Asset page
  </div>

    <LineChart></LineChart>  
    
    <h1>Demo examples of vue-chartjs</h1>
    

</template>

<script>
import LineChart from '@/components/LineChart'

export default {
  name: 'Asset',
  components: {
      LineChart,
  }
}
</script>
 
<style scoped>
  ul {
    list-style-type: none;
    padding: 0;
  }
 
  li {
    display: inline-block;
    margin: 0 10px;
  }
 
  a {
    color: #42b983;
  }
</style>