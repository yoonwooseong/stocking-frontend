<template>
  <div class="title">
    Asset page
  </div>
  <div class="contents">
    <LineChart :message=message :label=labels></LineChart>
    <PieChart></PieChart>
  </div>
</template>

<script>
import LineChart from '@/components/LineChart'
import PieChart from '@/components/PieChart'

export default {
  name: 'Asset',
  data: () => ({
    message:"gd",
    labels : [
      "20.12",
      "21.01",
      "21.02",
      "21.03",
      "21.04",
      "21.05",
      "21.06",
    ]
  } ),
  components: {
      LineChart, PieChart
  },
  lineData: {
    labels : [
      "20.12",
      "21.01",
      "21.02",
      "21.03",
      "21.04",
      "21.05",
      "21.06",
    ],
    datasets : [
      {
        label: "수입",
        data: [150, 180, 180, 230, 230, 230, 230],
        fill: false,
        borderColor: "#41B883",
        tension: 0.1
        // backgroundColor: "black",
      },
      {
        label: "지출",
        data: [80, 75, 90, 70, 65, 70, 80],
        fill: false,
        borderColor: "#E46651",
        tension: 0.1
        // backgroundColor: "blue",
      },
      {
        label: "총 자산",
        data: [70, 185, 275, 435, 590, 750, 900],
        fill: false,
        borderColor: "#5586EB",
        tension: 0.1,
        // backgroundColor: "blue",
      }
    ],
  },
  
  lineOption: {

  }

}

</script>
 
<style scoped>
  
</style>