export const inputPropsHeader = {
  class: "new-todo",
  autofocus: true,
  autocomplete: "off",
  placeholder: "What needs to be done?"
};

export const getInputPropsMain = checked => ({
  checked,
  class: "toggle-all",
  id: "toggle-all",
  type: "checkbox"
});

export const getButtonProps = show => ({
  class: "clear-completed",
  "v-show": show
});

export const filters = {
  all: todos => todos,
  active: todos => todos.filter(todo => !todo.done),
  completed: todos => todos.filter(todo => todo.done)
};