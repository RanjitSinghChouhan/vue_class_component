import { createStore } from 'vuex'

export interface State {
  todos: string[];
}

export default createStore<State>({
  state: {
    todos: []
  },
  mutations: {
    ADD_TODO(state, todo: string) {
      state.todos.push(todo)
    },

    DELETE_TODO(state, todo: string) {
      state.todos = state.todos.filter(t => t !== todo)
    },

    EDIT_TODO(state, todo: string) {
      const index = state.todos.findIndex(t => t === todo)
      if (index !== -1) {
        state.todos.splice(index, 1, todo);
      }
    }
  },
  actions: {
    addTodo({ commit }, todo: string) {
      commit('ADD_TODO', todo)
    },
    deleteTodo({ commit }, todo: string) {
      commit('DELETE_TODO', todo)
    },
    editTodo({ commit }, todo: string) {
      commit('EDIT_TODO', todo)
    }
  },
})