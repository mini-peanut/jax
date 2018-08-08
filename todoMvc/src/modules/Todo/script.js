import TodoItem from './TodoItem/TodoItem.vue'
import { wrapper, mapMutations } from 'app'
import { getInputPropsMain, getButtonProps, inputPropsHeader, filters} from './config.js'

const todoHandler = mapMutations('todo');

const todo = wrapper({
  components: { TodoItem },
  data ({todo}, props) {
    const { todos, visibility} = todo;
    const allChecked = todos.every(todo => todo.done);
    const filteredTodos = filters[visibility](todos);
    const remaining = todos.filter(todo => !todo.done).length;
    const isShowButton = todos.length <= remaining;

    return {
      allChecked,
      filters,
      filteredTodos,
      todos,
      visibility,
      remaining,
      inputPropsHeader,
      inputPropsMain: getInputPropsMain(allChecked),
      buttonProps: getButtonProps(isShowButton)
    }
  },
  methods: {
    ...todoHandler,
    addTodo ({commit, state}, e) {
      const value = e.target.value;
    }
  }
})

console.log( todo );

export default todo