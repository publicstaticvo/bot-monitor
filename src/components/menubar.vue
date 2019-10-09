<template>
	<div class="menubar" v-cloak>
		<div class="menu-wrapper" v-cloak>
			<div class="tm">
				<router-link to="/detect">Detector</router-link>
			</div>
			<div class="tm">
				<router-link to="/generate">Generator</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	import detectorLink from "./detectorLink.vue";
	//
	export default {
		name: "menubar",
		components: {detectorLink,},
		methods: {
		},
	}
</script>

<style>
	[v-cloak]{
		display: none;
	}
	.menubar {
		width: 100%;
		height: 60px;
		top: 0;
		background-color: #f0f0f0;
		margin-right: auto;
		margin-left: auto;
	}
	.menu-wrapper{
		width: 70%;
		height: 100%;
		margin: auto;
	}
	.tm{
		width: 150px;
		float: left;
		margin: auto 0;
		display: flex;
		font-size: 20px;
	}
	.tm a{
		padding: 15px;
		text-align: center;
		color: #333;
		text-decoration: none;
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