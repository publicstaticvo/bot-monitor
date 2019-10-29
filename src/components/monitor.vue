<template>
  <el-container>
    <el-header>
      <h1 style="float: left">Bot {{bot_name}}'s monitor</h1>
      <a href="https://www.twitter.com" style="float: right; line-height: 60px">
        Go to {{bot_name}}'s twitter mainpage
      </a>
    </el-header>
    <el-main>
      <el-tabs :v-model="defaultActive">
        <el-tab-pane label="monitor" name="first">
          <h1>Bot Score: 0.0</h1>
          <h2>score: 0.12</h2>
        </el-tab-pane>
        <el-tab-pane label="Follow" name="second"><follow></follow></el-tab-pane>
        <el-tab-pane label="Forward" name="third"><forward></forward></el-tab-pane>
        <el-tab-pane label="Origin" name="fourth"><origin></origin></el-tab-pane>
      </el-tabs>
    </el-main>
  </el-container>
</template>

<script>
  import Follow from "./follow.vue";
  import Forward from "./forward.vue";
  import Origin from "./origin.vue";
  export default {
    name: "monitor",
    components: {Origin, Forward, Follow},
    data() {
      return {
        bot_name: this.$route.params.bot_name,
        defaultActive: 'first',
      };
    },
  }
</script>

<style>
  .is-top {
    font-size: 20px !important;
  }
</style>