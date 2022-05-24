<template>
  <DashBoard/>
</template>

<script>
import DashBoard from './components/Dashboard.vue'

export default {
  name: 'App',
  components: {
    DashBoard
  }
}
</script>

<style>
*{
  overflow: hidden;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  overflow-y: auto;
}

html{
  overflow-y: auto !important;
  height: 100%;
}
body{
  background-color: #f8f9fb !important;
  width: 100% !important;
  height: 100% !important;
  position: relative !important;
  overflow-x: visible;
  height: 100%;
}
</style>
