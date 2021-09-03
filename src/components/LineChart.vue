<template>
  <div style="height:600px;width:600px;">
    <vue3-chart-js v-bind="{ ...lineChart }" />
  </div>
</template>

<script>
import Vue3ChartJs from "@j-t-mcc/vue3-chartjs";
import zoomPlugin from "chartjs-plugin-zoom";
import dataLabels from "chartjs-plugin-datalabels";

// globally registered and available for all charts
Vue3ChartJs.registerGlobalPlugins([zoomPlugin]);

export default {
  name: "LineChart",
  components: {
    Vue3ChartJs,
  },
  props: { 
    msg: Object 
  },
  watch: {
    msg() {
        this.msg
    }
  },
  
  data() {
    return {
      // labels : this.lineData.labels,
      // datasets : this.lineData.datasets
    }
  },
  setup() {
    const lineChart = {
      type: "line",
      // locally registered and available for this chart
      plugins: [dataLabels],
      data: {
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
      options: {
        plugins: {
          zoom: {
            zoom: {
              wheel: {
                enabled: true,
              },
              pinch: {
                enabled: true,
              },
              mode: "y",
            },
          },
          datalabels: {
            backgroundColor: function (context) {
              return context.dataset.backgroundColor;
            },
            borderRadius: 1,
            color: "black",
            font: {
              weight: "bold",
            },
            formatter: Math.round,
            padding: 6,
          },
        },
      },
    };

    return {
      lineChart,
    };
  },
};
</script>
