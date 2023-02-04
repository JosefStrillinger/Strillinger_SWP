<template>
  <DataTable
    class="table table-hover table-striped"
    width="100%"
    :data="medals"
  >
    <thead>
      <tr>
        <th v-for="c in columns">{{ c }}</th>
      </tr>
    </thead>
    <tfoot></tfoot>
  </DataTable>
</template>

<script>
import DataTable from "datatables.net-vue3";
import DataTablesLib from "datatables.net-bs5";

export default {
  components: {
    DataTable,
  },
  setup() {
    console.log("setup");
    DataTable.use(DataTablesLib);
  },
};
</script>

<style scoped>
@import "bootstrap";
@import "datatables.net-bs5";
</style>
