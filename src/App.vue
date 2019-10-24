<template>
  <el-container>
    <el-header><menubar></menubar></el-header>
    <el-main><router-view></router-view></el-main>
    <el-footer></el-footer>
  </el-container>
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
    font-size: 20px;
  }
  a {
    text-decoration: none;
  }
</style>
