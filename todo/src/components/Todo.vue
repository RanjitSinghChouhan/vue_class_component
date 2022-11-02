<template>
  <div class="todo">
    <span v-text="todo"></span>
    <button @click="editTodo">Edit</button>
    <button @click="deleteTodo">Remove</button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import store from "../store";

@Options({
  props: ["todo"],
  methods: {
    deleteTodo(): void {
      store.dispatch("deleteTodo", this.todo);
    },
    editTodo(): void {
      store.dispatch("editTodo", this.todo);
    },
  },
})
export default class Todo extends Vue {}
</script>

<style>
.todo {
  display: flex;
  justify-content: space-between;
  align-content: center;
  padding: 12px 24px;
  border: 1px solid #ccc;
  margin-top: 2px;
}
.todo:hover {
  background-color: rgb(187, 110, 110);
}
button {
  background-color: rgb(139, 38, 38);
  color: azure;
}
</style>