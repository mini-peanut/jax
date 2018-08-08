import { mapMutaions, wrapper } from 'app'
import { getInputToggleProps, getInputEditProps } from 'config.js'

const todoHandler = mapMutaions('todo');

export default wrapper({
  data ({todo}) {
    const {editing, text} = todo;

    return {
      editing,
      inputEditProps: getInputEditProps(todo),
      inputToggleProps: getInputToggleProps(todo)
    }
  },
  methods: {
    ...todoHandler,
    doneEdit (state, e) {
      const value = e.target.value.trim();
      const editing = state.todo.editing;

      if (!value) {
        todoHandler.removeTodo(todo)
      }
      if (editing) {
        todoHandler.editTodo(todo, value).switchEditing(false)
      }
    }
  }
})