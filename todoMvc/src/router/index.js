import Vue from 'vue'
import Router from 'vue-router'

const Todo = () => import('../modules/Todo/Todo.vue')

Vue.use(Router)
const router = new Router({
  routes: [
    {
			path: '/todo',
			name: 'todo',
			component: Todo
		}
  ]
})

export default router

