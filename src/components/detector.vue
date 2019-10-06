<template>
	<div class="detector-wrapper">
		<page></page>
	</div>
</template>

<script>
	import Menubar from "./menubar.vue";
	import Page from "./Page.vue";
	
	export default {
		name: 'detector',
		components: {Page, Menubar}
	}
</script>

<style scoped>
	.detector-wrapper{
		width: 100%;
		background-color: #f6f6f6;
	}
</style>