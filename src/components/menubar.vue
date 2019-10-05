<template>
	<div class="menubar" v-cloak>
		<div class="menu-wrapper" v-cloak>
			<logo></logo>
		</div>
	</div>
</template>

<script>
	import logo from "./logo.vue";
	//
	export default {
		name: "menubar",
		components: {logo,},
		methods: {
		},
	}
</script>

<style scoped>
	[v-cloak]{
		display: none;
	}
	.menubar {
		width: 100%;
		height: 60px;
		background-color: #f0f0f0;
		margin-right: auto;
		margin-left: auto;
	}
	.menu-wrapper{
		width: 70%;
		height: 100%;
		margin: auto;
	}
	a:link {
		text-decoration: none;
	}
	a:active {
		text-decoration:none;
	}
	a:hover {
		text-decoration:none;
	}
	a:visited {
		text-decoration: none;
	}
</style>