<template>
  <DataTable class="table table-hover table-striped" width="100%" :data="data">
    <thead>
      <tr>
        <th v-for="c in columns" :key="c">{{ c }}</th>
      </tr>
    </thead>
    <tfoot></tfoot>
  </DataTable>
</template>

<script>
import DataTable from "datatables.net-vue3";
import DataTablesLib from "datatables.net-bs5";

DataTable.use(DataTablesLib);

export default {
  components: {
    DataTable,
  },
  props: ["data", "columns"],
  data() {
    return {};
  },
  setup() {
    console.log("setup");
  },
};
</script>

<style scoped>
@import "bootstrap";
@import "datatables.net-bs5";
</style>
