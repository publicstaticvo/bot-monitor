<template>
  <div id="app" v-cloak>
    <menubar></menubar>
    <page></page>
  </div>
</template>

<script>
  import Menubar from "./components/menubar.vue";
  import Page from "./components/Page.vue";
  
  export default {
    name: 'app',
    components: {Page, Menubar}
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
