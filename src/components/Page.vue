<template>
	<div class="page-wrapper">
		<div class="input-wrapper">
			<label class="input-user-name">
				<input v-model="inputName" placeholder="Json strings here">
			</label>
			<el-button class="detect" @click="detect()">Detect</el-button>
		</div>
		<div class="data-wrapper">
			<el-table :data="userStatusList" style="width: 100%">
				<el-table-column prop="num" label="" width="50" align="center"></el-table-column>
				<el-table-column prop="name" label="用户名" width="300" align="center"></el-table-column>
				<el-table-column prop="screen_name" label="昵称" width="300" align="center"></el-table-column>
				<el-table-column prop="time" label="创建日期" width="130" align="center"></el-table-column>
				<el-table-column prop="bot" label="机器人指数" width="130" align="center"></el-table-column>
				<el-table-column prop="scores" label="××得分(?)" align="center"></el-table-column>
			</el-table>
		</div>
	</div>
</template>

<script>
	import axios from 'axios';
	
	export default {
		name: "Page",
		data: function () {
			return {
				inputName: "",
				userStatusList: [{
					num: '1',
					name: 'bot1',
					screen_name: 'aaa',
					time: '2016-05-01',
					bot: '1.0',
					scores: '-'
				},]
			};
		},
		methods: {
			detect: function () {
				let js = JSON.parse(this.inputName);
				axios.post("http://122.51.14.253:8080/bot_or_not", js).then( res => {
					if(res.data['code'] !== 0)
					{
						var time_str=res.data['detail']['created_at'].split(' ');
						let months = {'Jan': "01",'Feb': "02",'Mar': "03",'Apr': "04","May": "05",'Jun': "06",
							'Jul': "07",'Aug': "08",'Sept': "09",'Oct': "10",'Nov': "11",'Dec': "12",};
						this.userStatusList.push({
							num: this.userStatusList.length+1,
							name: res.data['detail']['name'],
							screen_name: res.data['detail']['screen_name'],
							time: time_str[5]+"-"+months[time_str[1]]+"-"+time_str[2],
							bot: res.data['bot'],
							scores: '-' //To be changed
						});
					}
					else alert("Error: ["+res.data['code']+"]"+res.data['msg']);
					this.inputName='';
				}).catch(error => {
					alert(error);
					var time_str="Fri Mar 18 11:11:05 +0000 2011".split(' ');
					let months = {'Jan': "01",'Feb': "02",'Mar': "03",'Apr': "04","May": "05",'Jun': "06",
						'Jul': "07",'Aug': "08",'Sept': "09",'Oct': "10",'Nov': "11",'Dec': "12",};
					this.userStatusList.push({
						num: this.userStatusList.length+1,
						name: '王小虎',
						screen_name: '王小虎',
						time: time_str[5]+"-"+months[time_str[1]]+"-"+time_str[2],
						bot: '1516',
						scores: '-'
					});
					this.inputName='';
				});
			}
		},
	}
</script>

<style scoped>
	.page-wrapper{
		width: 70%;
		margin: 30px auto;
	}
	.input-wrapper{
		width: 60%;
		height: 45px;
		margin: 0 auto;
	}
	el-button{
		padding: 0 10px;
	}
	.data-wrapper{
		width: 100%;
		margin: 15px 0;
	}
</style>