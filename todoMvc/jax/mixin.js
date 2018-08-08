export default function applyMixin(Vue) {
	Vue.mixin({
		beforeCreate: function() {
			const options = this.$options
	    if (options.Jax) {
	      this.$jax = options.Jax(options.store)
	    } else if (options.parent && options.parent.$store) {
      	this.$jax = options.parent.$jax
      }
		}
	})
}