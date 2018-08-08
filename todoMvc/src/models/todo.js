import {FILTERS} from '../config/todo.config.js';

export default {
	namespace: 'todo',
	state: {
		newTodo: '',
		todos: [],
		editingIndex: null,
		visibility: FILTERS.ALL,
	},
	mutations: {
		addTodo(state, todo) {
			state.todos.push(todo)
		}
	}
};