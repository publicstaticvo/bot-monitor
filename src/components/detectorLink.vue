<template>
	<div class='tm'>
		<router-link to="/detect">Detector</router-link>
	</div>
</template>

<script>
	export default {
		name: "detector-link",
	}
</script>

<style scoped>
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
</style>