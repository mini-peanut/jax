<template>
  <section class="todoapp">
    <!-- header -->
    <header class="header">
      <h1>todos</h1>
      <input @keyup.enter="addTodo">
      123
    </header>
    <!-- main section -->
    <section class="main" v-show="todos.length">
      <input v-bind="inputPropsMain" @change="toggleAll(!allChecked)">
      <label for="toggle-all"></label>
      <ul class="todo-list">
        <TodoItem v-for="(todo, index) in filteredTodos" :key="index" :todo="todo"/>
      </ul>
    </section>
    <!-- footer -->
    <footer class="footer" v-show="todos.length">
      <span class="todo-count">
        <strong>{{ remaining }}</strong>
        {{ remaining }} left
      </span>
      <ul class="filters">
        <li v-for="(val, key) in filters">
          <a :href="'#/' + key" :class="{ selected: visibility === key }" @click="visibility = key">{{ key }}</a>
        </li>
      </ul>
      <button v-bind="buttonProps">Clear completed</button>
    </footer>
  </section>
</template>
<script type="text/javascript" src="./script.js"></script>
<style type="text/css" src='todomvc-app-css/index.css'></style>