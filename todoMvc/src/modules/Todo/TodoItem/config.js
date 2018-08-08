export const getInputEditProps = todo => ({
  class: "edit",
  'v-show': todo.editing,
  'v-focus': todo.editing,
  'value': todo.text
});

export const getInputToggleProps = todo => ({
  class: "toggle",
  type: "checkbox",
  checked: todo.checked
});