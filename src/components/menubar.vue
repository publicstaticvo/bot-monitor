<template>
  <el-menu class="menubar" default-active="0" mode="horizontal"
           background-color="#2c3e50" text-color="#fff" active-text-color="#fff">
    <el-menu-item class="logo">Bot<sup>TM</sup></el-menu-item>
    <el-menu-item class="float-right">Settings</el-menu-item>
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
</style>