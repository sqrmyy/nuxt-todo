export const state = () => ({
  todoList: [],
})

export const getters = {
  todoList({ todoList }) {
    return todoList
  },
}

export const actions = {
  handleAdd({ commit }, title) {
    commit('add', { title, isChecked: false })
  },
  handleCheck({ commit }, index) {
    commit('check', index)
  },
  handleDelete({ commit }, index) {
    commit('remove', index)
  },
}

export const mutations = {
  add(state, todo) {
    state.todoList.push(todo)
  },
  check(state, index) {
    state.todoList = state.todoList.map((todo, i) => {
      return {
        ...todo,
        isChecked: index === i ? !todo.isChecked : todo.isChecked,
      }
    })
  },
  remove(state, index) {
    state.todoList.splice(index, 1)
  },
}
