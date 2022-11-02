<template>
  <div class="my-todo">
    <h1>My Todos</h1>
    <br />
    <br />
    <TodoInput />
    <TodoList />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";

@Options({
  components: {
    TodoInput,
    TodoList,
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.my-todo {
  display: block;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 300px;
  height: auto;
}
</style>
