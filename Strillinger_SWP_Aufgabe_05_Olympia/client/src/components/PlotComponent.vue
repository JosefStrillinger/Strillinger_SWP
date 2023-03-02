<template>
  <VuePlotly :data="data" :layout="layout"> </VuePlotly>
</template>

<script>
import { VuePlotly } from "vue3-plotly";
import { api_request_parameter, Services } from "@/requests.js";

export default {
  components: {
    VuePlotly,
  },
  props: {
    options: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      country: "",
      event: "",
      data: [
        {
          x: [],
          y: [],
          type: "bar",
        },
      ],
      layout: {
        title: "Graph",
      },
    };
  },
  watch: {
    options() {
      this.country = this.options["country"];
      this.event = this.options["event"];
      this.load_plotly();
    },
  },
  methods: {
    async load_plotly() {
      if (this.country != "") {
        let result = await api_request_parameter(
          Services.medals_plotly,
          this.country
        );
        this.data = [];
        this.data.push({
          x: result[0]["x"],
          y: result[0]["y"],
          type: result[0]["type"],
        });
        console.log("data: ", this.data);
      }
    },
  },
};
</script>

<style scoped></style>
