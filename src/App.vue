<template>
  <div id="app">
   
    <router-view class="view"></router-view>
   
  </div>
</template>

<script>

export default {
  name: "App",

};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 20px;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
