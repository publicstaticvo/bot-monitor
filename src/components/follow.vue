<template>
  <div class="follow-wrapper">
    <div class="follow-header">
      <h2>Choose <el-input-number v-model="num" min="1"></el-input-number> users and select
        several users to follow <el-button @click="choose">Get</el-button></h2>
      
    </div>
    <el-table :data="userData">
      <el-table-column prop="name" label="Name" min-width="50%" align="center"></el-table-column>
      <el-table-column prop="score" label="Score" min-width="15%" align="center"></el-table-column>
      <el-table-column prop="followed" label="Followed" min-width="15%" align="center"></el-table-column>
      <el-table-column label="Follow" min-width="20%" align="center">
        <template slot-scope="scope">
          <el-button :type="state" v-show="scope.row.label">FOLLOW</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import axios from "axios";
  export default {
    name: "follow",
    data() {
      return {
        num: 10,
        userData: [],
        state: "follow",
      };
    },
    methods: {
      choose() {
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.post("http://166.111.5.228:5010/to_follow/get_random", { num: this.num}).then(
          response => {
            axios.post("http://166.111.5.228:5010/to_follow/beta", response.data.data).then(
              response => {
                let scores = response.data.data.score;
                let labels = response.data.data.label;
                for(let key in scores) {
                  this.userData.push({
                    name: key,
                    score: scores[key],
                    label: (labels[key] === 1.0),
                  })
                }
              }
            );
          }).catch(_ => {
            this.$message("Request Failed!");
        });
      },
    }
  }
</script>

<style scoped>
  .follow-wrapper {
    text-align: center;
  }
</style>