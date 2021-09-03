<template>
  <div style="height:300px;width:300px;">
    <vue3-chart-js v-bind="{ ...pieChart }" />
  </div>
</template>

<script>
import Vue3ChartJs from "@j-t-mcc/vue3-chartjs";

export default {
  name: "PieChart",
  components: {
    Vue3ChartJs,
  },
  setup() {
    const pieChart = {
      type: "pie",
      data: {
        labels: ["수입", "지출", "저축"],
        datasets: [
          {
            backgroundColor: ["#41B883", "#E46651", "#5586EB"],
            data: [80, 39, 41],
          },
        ],
      },
    };

    return {
      pieChart,
    };
  },
};
</script>
