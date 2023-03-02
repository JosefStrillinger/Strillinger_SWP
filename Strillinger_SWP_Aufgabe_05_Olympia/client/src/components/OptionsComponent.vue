<!-- eslint-disable vue/no-use-v-if-with-v-for -->
<template>
  <section>
    <select v-model="item" @change="onChange($event)">
      <option disabled value="" selected="selected">Please select one</option>
      <option
        v-if="options == 'country'"
        v-for="c in items"
        :value="c"
        :key="c"
      >
        {{ c["noc"] }}
      </option>
      <option v-if="options == 'event'" v-for="c in items" :value="c" :key="c">
        {{ c["event"] }}
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
      items: null,
      item: "",
    };
  },
  mounted() {
    this.load_items();
  },
  methods: {
    async load_items() {
      if (this.options == "country") {
        this.items = await api_request(Services.regions_table);
      } else if (this.options == "event") {
        this.items = await api_request(Services.event_table);
      }
    },
    // eslint-disable-next-line no-unused-vars
    onChange(event) {
      if (this.item["noc"] != undefined) {
        this.$emit("countryChange", this.item["noc"]);
      } else if (this.item["event"] != undefined) {
        this.$emit("eventChange", this.item["event"]);
      }
    },
  },
};
</script>

<style>
@import "bootstrap";
</style>
