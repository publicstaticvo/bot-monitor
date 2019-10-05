<template>
	<div class="page-wrapper">
		<input-bar></input-bar>
		<accounts></accounts>
	</div>
</template>

<script>
	import InputBar from "./inputBar.vue";
	import Accounts from "./accounts";
	export default {
		name: "Page",
		components: {Accounts, InputBar}
	}
</script>

<style scoped>

</style>