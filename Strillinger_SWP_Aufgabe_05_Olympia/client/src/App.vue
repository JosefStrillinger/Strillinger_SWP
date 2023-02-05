<template>
  <header>Dashboard Olympia</header>
  <OptionsComponent></OptionsComponent>
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <TableComponent></TableComponent>
        <PlotComponent></PlotComponent>
      </div>
    </div>
  </div>
</template>

<style scoped>
header {
  font-size: x-large;
}
</style>

<script setup>
import PlotComponent from "./components/PlotComponent.vue";
import TableComponent from "./components/TableComponent.vue";
import OptionsComponent from "./components/OptionsComponent.vue";
</script>
