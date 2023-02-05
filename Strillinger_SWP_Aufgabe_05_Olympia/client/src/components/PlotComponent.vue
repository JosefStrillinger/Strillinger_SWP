<template>
  <VuePlotly :data="data" :layout="layout" :display-mode-bar="false">
  </VuePlotly>
</template>

<script>
import { VuePlotly } from "vue3-plotly";
export default {
  components: {
    VuePlotly,
  },
  data() {
    return {
      data: [
        {
          x: [1, 2, 3, 4],
          y: [10, 15, 13, 17],
          type: "scatter",
        },
      ],
      layout: {
        title: "Graph",
      },
    };
  },
};
</script>

<style scoped></style>
