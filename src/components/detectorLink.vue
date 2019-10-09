<template>
	<div class='tm'>
	
	</div>
</template>

<script>
	export default {
		name: "detector-link",
		props: ['href'],
		methods: {
			link: function () {
				return '/'+this.href;
			}
		},
	}
</script>

<style scoped>
</style>