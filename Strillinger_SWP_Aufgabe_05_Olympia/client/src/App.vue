<template>
  <div class="container">
    <div class="row">
      <header>Dashboard Olympia</header>
    </div>
  </div>

  <div class="row">
    <OptionsComponent
      @countryChange="onCountryChange($event)"
      :options="countries"
    ></OptionsComponent>
    <OptionsComponent
      @countryChange="onEventChange($event)"
      :options="events"
    ></OptionsComponent>
  </div>

  <div class="container">
    <div class="row">
      <TableComponent
        :options="{ country: country, event: event }"
      ></TableComponent>
      <PlotComponent
        :options="{ country: country, event: event }"
      ></PlotComponent>
    </div>
  </div>
</template>

<style scoped>
@import "bootstrap";
header {
  font-size: x-large;
  color: white;
  overflow: hidden;
}
</style>

<script setup>
import PlotComponent from "./components/PlotComponent.vue";
import TableComponent from "./components/TableComponent.vue";
import OptionsComponent from "./components/OptionsComponent.vue";
</script>

<script>
export default {
  data() {
    return {
      country: "",
      event: "",
      countries: "country",
      events: "event",
    };
  },
  methods: {
    onCountryChange(value) {
      this.country = value;
    },
    onEventChange(value) {
      this.event = value;
    },
  },
};
</script>
