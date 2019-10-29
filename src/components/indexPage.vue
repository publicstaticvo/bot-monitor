<template>
	<div class="page-wrapper">
		<div class="data-wrapper" style="width: 90%; margin: 20px 5%">
			<el-table :data="bots">
				<el-table-column prop="id" min-width="5%" align="center"></el-table-column>
				<el-table-column prop="name" label="username" min-width="25%" align="center"></el-table-column>
				<el-table-column prop="screen_name" label="screen name" min-width="25%" align="center"></el-table-column>
				<el-table-column prop="time" label="create date" min-width="15%" align="center"></el-table-column>
				<el-table-column prop="bot" label="bot score" min-width="10%" align="center"></el-table-column>
				<el-table-column prop="scores" label="scores" min-width="10%" align="center"></el-table-column>
				<el-table-column label="操作" min-width="10%" align="center">
					<template slot-scope="scope">
						<router-link :to="link(scope.row.name)" tag="el-button">Mainpage</router-link>
					</template>
				</el-table-column>
			</el-table>
		</div>
	</div>
</template>

<script>
	
	export default {
		name: "IndexPage",
		data() {
			return {
				test_str: '{"next_page":null,"statuses":[{"retweet_count":0,"in_reply_to_status_id":null,"favorited":false,"geo":null,"coordinates":null,"in_reply_to_screen_name":"geegathingu","truncated":false,"retweeted":false,"created_at":"Mon Oct 17 19:55:38 +0000 2011","in_reply_to_status_id_str":null,"user":{"profile_sidebar_fill_color":"DDEEF6","protected":false,"url":null,"default_profile":true,"statuses_count":1640,"name":"Brian Ngemu","show_all_inline_media":false,"contributors_enabled":false,"following":null,"profile_sidebar_border_color":"C0DEED","default_profile_image":false,"utc_offset":-28800,"profile_image_url":"http://a3.twimg.com/profile_images/1482992890/Red_devilz_normal.jpg","description":"Ask her.","verified":false,"profile_use_background_image":true,"time_zone":"Pacific Time (US & Canada)","created_at":"Sun Nov 22 14:08:48 +0000 2009","screen_name":"VeteranBryan","is_translator":false,"profile_background_image_url_https":"https://si0.twimg.com/images/themes/theme1/bg.png","profile_text_color":"333333","follow_request_sent":null,"geo_enabled":false,"notifications":null,"profile_background_image_url":"http://a0.twimg.com/images/themes/theme1/bg.png","favourites_count":9,"friends_count":109,"id_str":"91795531","profile_link_color":"0084B4","followers_count":70,"lang":"en","profile_image_url_https":"https://si0.twimg.com/profile_images/1482992890/Red_devilz_normal.jpg","profile_background_color":"C0DEED","location":"N@irwobi, kenya.","id":91795531,"listed_count":0,"profile_background_tile":false},"in_reply_to_user_id_str":"300761955","id_str":"126023585662906368","entities":{"user_mentions":[{"name":"Daniel Gathingu","screen_name":"geegathingu","indices":[0,12],"id_str":"300761955","id":300761955},{"name":"Joseph Mwangi","screen_name":"Joeymwangi","indices":[13,24],"id_str":"349813979","id":349813979},{"name":"Kelvin Kyalo","screen_name":"Kevkyalo","indices":[25,34],"id_str":"343598641","id":343598641},{"name":"Izzo Midamba","screen_name":"izzomidamba","indices":[35,47],"id_str":"285596612","id":285596612}],"urls":[],"hashtags":[]},"contributors":null,"source":"<a href=\"http://twitter.com/devices\" rel=\"nofollow\">txt</a>","place":null,"in_reply_to_user_id":300761955,"id":126023585662906368,"text":"@geegathingu @joeymwangi @kevkyalo @izzomidamba adobe imekataa kudownload na iyo act sina. nkt.","result_category":"recent"}],"served_by_blender":false,"error":null}',
				bots: [
					{
						id: 1,
						name: "dogcatbirdspet",
						screen_name: "dogcatbirdspe",
						time: "2011-10-17 19:55:38",
						bot: 0,
						scores: 0.12,
					}
				],
			};
		},
		methods: {
			link(name) {
				return '/'+name;
			}
		},
	}
</script>

<style scoped>

</style>