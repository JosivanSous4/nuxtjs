<template>
  <b-container>
    <NavBar></NavBar>
    <br />
    <h3>Listagem</h3>
    <b-table
      striped
      hover
      :items="items"
      :fields="fields"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      :per-page="perPage"
      :current-page="currentPage"
      responsive="sm"
    >
    </b-table>

    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
      align-v="center"
    ></b-pagination>
  </b-container>
</template>

<script lang="ts">
import Vue from "vue";
import client from "@/service/client";

export default Vue.extend({
  name: "hello",
  data() {
    return {
      sortBy: "age",
      sortDesc: false,
      perPage: 3,
      currentPage: 1,
      fields: [
        { key: "first_name", sortable: true },
        { key: "last_name", sortable: true },
        { key: "age", sortable: true },
        { key: "isActive", sortable: false },
      ],
      items: [
        { age: 40, first_name: "Dickerson", last_name: "Macdonald" },
        { age: 21, first_name: "Larsen", last_name: "Shaw" },
        { age: 89, first_name: "Geneva", last_name: "Wilson" },
        { age: 38, first_name: "Jami", last_name: "Carney" },
      ],
    };
  },
  methods: {
    async fetchMessage(): Promise<void> {
      const response = await client.get("/test");
      this.items = response.data;
    },
  },
  mounted() {
    this.fetchMessage();
  },
  computed: {
    rows() {
      return this.items.length;
    },
  },
});
</script>
