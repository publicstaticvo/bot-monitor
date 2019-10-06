<template>
  <div id="app" v-cloak>
    <menubar></menubar>
    <router-view></router-view>
  </div>
</template>

<script>
  import menubar from "./components/menubar.vue";
  
  export default {
    name: 'app',
    components: {menubar,}
  }
</script>

<style>
  [v-cloak]{
    display: none;
  }
  .invisible{
    display: none;
  }
  #app{
    font-family: 'Roboto', sans-serif;
  }
</style>
