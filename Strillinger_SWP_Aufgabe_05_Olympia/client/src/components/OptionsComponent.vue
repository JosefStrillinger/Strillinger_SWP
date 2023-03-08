<!-- eslint-disable vue/no-use-v-if-with-v-for -->
<template>
  <section>
    <select v-model="info" @change="onOptionChange($event)">
      <option disabled value="" selected="selected">Please select one</option>
      <option
        v-if="options == 'country'"
        v-for="c in infos"
        :value="c"
        :key="c"
      >
        {{ c["noc"] }}
      </option>
      <option v-if="options == 'event'" v-for="e in infos" :value="e" :key="e">
        {{ e["event"] }}
      </option>
    </select>
  </section>
</template>

<script>
import { api_request, Services } from "@/requests.js";

export default {
  components: {},
  props: {
    options: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      infos: null,
      info: "",
    };
  },
  mounted() {
    this.load_infos();
  },
  methods: {
    async load_infos() {
      if (this.options == "country") {
        this.infos = await api_request(Services.regions_table);
      } else if (this.options == "event") {
        this.infos = await api_request(Services.event_table);
      }
    },
    // eslint-disable-next-line no-unused-vars
    onOptionChange(event) {
      if (this.info["noc"] != undefined) {
        this.$emit("countryChange", this.info["noc"]);
      } else if (this.info["event"] != undefined) {
        this.$emit("eventChange", this.info["event"]);
      }
    },
  },
};
</script>

<style>
@import "bootstrap";
</style>
