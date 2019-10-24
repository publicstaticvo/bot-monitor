<template>
	<div class="page-wrapper">
		<div class="input-wrapper">
			<el-date-picker v-model="date" align="left" placeholder="Pick a date:" :picker-options="option">
			</el-date-picker>
			<!--el-input-number v-model="newsNumber"></--el-input-number-->
			<el-button @click="getNews">Get news</el-button>
		</div>
		<div class="news-wrapper">
			<el-input id="news" type="textarea" disabled="true"></el-input>
		</div>
		<div class="tweets-wrapper">
			<el-input id="tweets" type="textarea" disabled="true"></el-input>
		</div>
	</div>
</template>

<script>
	import axios from 'axios';
	
	export default {
		name: "forward",
		data: function () {
			return {
				date: '',
				newsNumber: 1,
				news: [],
				option: {
					disabledDate: function (time) {
						return time.getTime() > Date.now();
					},
					shortcuts: [{
						text: '今天',
						onClick(picker) {
							picker.$emit('pick', new Date());
						}
					}, {
						text: '昨天',
						onClick(picker) {
							const date = new Date();
							date.setTime(date.getTime() - 3600 * 1000 * 24);
							picker.$emit('pick', date);
						}
					}, {
						text: '一周前',
						onClick(picker) {
							const date = new Date();
							date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
							picker.$emit('pick', date);
						}
					}],
				}
			}
		},
		methods: {
			getNews: function () {
				this.news = [];
				if(this.newsNumber<=0){
					alert("请输入正确的新闻数");
					return false;
				}
				this.date.getDate().format('YYYYMMDD');
				axios.post("http://lab.aminer.cn/eitools/rank/news",{
					'date_str': this.date.getDate().format('YYYYMMDD'),
					'news': this.newsNumber
				}).then(response => {
					if(response.status !== 0)
					{
						document.getElementById('news').innerText=response.data['news']['cn'][0]['content'];
						document.getElementById('tweets').innerText="DDL postponed";
					}
					else alert("Error: ["+response.status+"]"+response.msg);
				}).catch(error => {
					alert("Post Request " + error);
				})
			}
		},
	}
</script>

<style scoped>

</style>