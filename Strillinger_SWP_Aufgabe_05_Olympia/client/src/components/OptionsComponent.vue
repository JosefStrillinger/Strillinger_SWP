<template>
  <section>
    <select v-model="country">
      <option disabled value="" selected="selected">Please select one</option>
      <option v-for="c in countries" :value="c" :key="c">{{ c["noc"] }}</option>
    </select>
  </section>
</template>

<script>
import { api_request, Services } from "../requests.js";

export default {
  components: {},
  data() {
    return {
      countries: null,
      country: "",
    };
  },
  mounted() {
    this.load_countries();
  },
  methods: {
    async load_countries() {
      this.countries = await api_request(Services.regions_table);
    },
  },
};
</script>

<style>
@import "bootstrap";
</style>
