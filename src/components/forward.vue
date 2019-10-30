<template>
	<div class="page-wrapper">
		<div class="input-wrapper">
			<el-date-picker v-model="date" align="left" placeholder="Pick a date:" :picker-options="option">
			</el-date-picker>
			<!--el-input-number v-model="newsNumber"></--el-input-number-->
			<el-button @click="getNews">Get news</el-button>
		</div>
		<div class="content-wrapper">
			<el-input id="news" v-model="newsContent" type="textarea" disabled="true"></el-input>
			<el-input id="tweets" v-model="tweetContent" type="textarea" disabled="true"></el-input>
		</div>
	</div>
</template>

<script>
	import axios from 'axios';
	
	export default {
		name: "forward",
		data() {
			return {
				date: new Date(),
				tweetContent: '',
				newsContent: '',
				option: {
					disabledDate(time) {
						return time.getTime() > Date.now();
					},
				}
			}
		},
		methods: {
			getNews() {
				var date_str = "" + this.date.getFullYear()
						+ (this.date.getMonth() < 9 ? "0" + (this.date.getMonth() + 1) : (this.date.getMonth() + 1))
						+ (this.date.getDate() < 10 ? "0" + this.date.getDate()	: this.date.getDate());
				axios.post("http://166.111.5.228:9010",{
					"date": date_str,
				}).then(response => {
					let responseData = response.data["tweet"];
					responseData = JSON.parse(responseData);
					this.newsContent = "PublishTime: " + responseData["publishTime"] + '\n';
					this.newsContent += "Publisher: " + responseData["publisher"] + '\n    ';
					this.newsContent += responseData["content"];
					this.tweetContent = responseData["topic"] + responseData["tweet"];
					this.tweetContent += "\nOriginURL: " + responseData["relatednewsURL"];
				}).catch(error => {
					alert("Post Request " + error);
				})
			}
		},
	}
</script>

<style scoped>

</style>