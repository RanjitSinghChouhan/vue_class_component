<template>
  <form @submit.prevent="addTodo" class="todo-input">
    <input type="text" v-model="newTodo" />
    <input type="submit" value="Add Todo" />
  </form>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import store from "../store";

export default class TodoInput extends Vue {
  public newTodo = "";

  public addTodo(): void {
    store.dispatch("addTodo", this.newTodo);
    this.newTodo = "";
  }
}
</script>

<style>
form {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
}
</style>