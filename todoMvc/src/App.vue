<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      transitionName: '',
      url: window.location.href
    }
  }
}
</script>