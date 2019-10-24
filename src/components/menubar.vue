<template>
  <el-menu class="menubar" default-active="0" mode="horizontal"
           background-color="#2c3e50" text-color="#fff" active-text-color="#fff">
    <el-menu-item class="logo">Bot<sup>TM</sup></el-menu-item>
    <el-menu-item class="logo">
      <router-link to="/" style="display: block">All Bots</router-link>
    </el-menu-item>
    <el-menu-item class="float-right logo">Settings</el-menu-item>
    <el-menu-item class="float-right logo">Manual</el-menu-item>
  </el-menu>
</template>

<script>
	export default {
		name: "menubar",
	}
</script>

<style>
	[v-cloak] {
    display: none;
  }
  .logo {
    font-size: 20px !important;
  }
  .float-right {
    float: right !important;
  }
</style>