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
