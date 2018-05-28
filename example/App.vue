<template>
  <div id="app">
    <ul>
      <li><router-link to="/carLicense">carLicense</router-link></li>
      <li><router-link to="/button">button</router-link></li>
      <li><router-link to="/cell">cell</router-link></li>
      <li><router-link to="/tab">tab</router-link></li>
      <li><router-link to="/radio">radio</router-link></li>
      <li><router-link to="/toast">toast</router-link></li>
      <li><router-link to="/dialog">dialog</router-link></li>
      <li><router-link to="/actionsheet">actionsheet</router-link></li>
      <li><router-link to="/agree">agree</router-link></li>
    </ul>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 20px;
}
body {
  background-color: #ECEFF9;
}
</style>
