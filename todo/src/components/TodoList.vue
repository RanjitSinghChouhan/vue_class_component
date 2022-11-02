<template>
  <div class="todo-list">
    <Todo v-for="(todo, i) in $store.state.todos" :key="i" :todo="todo" />
  </div>
</template>

<script>
import { Options, Vue } from "vue-class-component";
import Todo from "./Todo";

@Options({
  components: {
    Todo,
  },
})
export default class TodoList extends Vue {}
</script>

<style>
</style>