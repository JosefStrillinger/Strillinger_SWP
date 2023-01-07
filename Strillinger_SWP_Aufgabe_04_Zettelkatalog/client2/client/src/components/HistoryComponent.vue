<template>
  <section>
    <div>
      <div v-for="history in histories" :key="history.id">
        <p>{{ history.date }}</p>
        <p>{{ history.changed_desc }}</p>
      </div>
      <div v-if="histories.length == 0">No History</div>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  data() {
    return {};
  },
  props: {
    histories: {
      required: true,
    },
  },
  mounted() {
    console.log(this.histories);
  },
};
</script>
