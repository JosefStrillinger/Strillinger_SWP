<template>
  <div>
    <input v-model="name" />
    <button @click="getText">Suche</button>
  </div>
  <br /><br />
  <div>
    <table>
      <tr v-for="result in results" :key="result.id">
        <div v-if="editing !== result.id">
          <div class="result-item">
            <td>
              <img class="result-thumb" :src="result.thumb" alt="image" />
            </td>
            <td>
              <div
                class="result-description"
                v-html="highlight(result.description)"
              ></div>
            </td>
            <td>
              <button @click="getHistory(result)">edit {{ result.id }}</button>
            </td>
          </div>
        </div>
        <div v-else>
          <div class="result-item">
            <td>
              <img class="result-thumb" :src="result.thumb" alt="image" />
            </td>
            <td>
              <textarea
                class="description top-left"
                v-model="result.description"
              />
            </td>
            <td><button @click="updateText(result)">Save</button></td>
            <td><button @click="cancelUpdate()">Cancel</button></td>
            // eslint-disable-next-line vue/valid-v-for
            <div v-for="history in histories" :key="history.id">
              <td>
                <div
                  class=""
                  @click="onDescriptionClick(result, history)"
                  v-html="history.description"
                ></div>
              </td>
            </div>
          </div>
        </div>
      </tr>
    </table>
  </div>
</template>

<style scoped>
.result-item {
  display: flex;
  align-items: center;
}
.description {
  width: 700px;
  height: 300px;
}
.result-thumb {
  width: 600px;
  height: 300px;
  object-fit: cover;
  margin-left: -250px;
}
.result-description {
  margin-left: 100px;
  width: 600px;
  font-family: Calibri;
}
button {
  font-weight: bold;
  background: aquamarine;
}
</style>
<script lang="js">
import {
  api_patch,
  api_search,
  api_search_history,
  replaceAll,
} from "@/requests.js";
export default {
  data() {
    return {
      editing: null,
      results: [],
      histories: [],
      name: "",
    };
  },
  methods: {
    async getText() {
      this.results = await api_search(this.name);
    },
    async updateText(result) {
      await api_patch(result);
      this.editing = null;
    },
    async getHistory(result) {
      this.editing = result.id;
      this.histories = await api_search_history(result);
      console.log(this.histories);
    },
    cancelUpdate() {
      this.editing = null;
      this.histories = [];
    },
    onDescriptionClick(result, history) {
      result.description = history.description;
    },
    highlight(text) {
      return replaceAll(text, this.name, `${this.name.italics()}`);
    },
  },
};
</script>
