<template>
  <div id="app">
    <div>
      <router-link to="/home">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/user">User</router-link>
    </div>
    <div>
      <router-view />
    </div>
    <table
      class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth"
    >
      <thead>
        <tr>
          <td>no</td>
          <td>使用者暱稱</td>
          <td>email</td>
          <td>建立日期</td>
          <td>刪除</td>
        </tr>
      </thead>
      <tbody>
        <template v-if="userList.length > 0">
          <tr v-for="(item, index) in userList" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ item.nickname }}</td>
            <td>{{ item.email }}</td>
            <td>{{ item.created_time }}</td>
            <td>
              <a @click="delUser(item.email)" href="javascript:">刪除</a>
            </td>
          </tr>
        </template>

        <template v-else>
          <tr>
            <td colspan="4">沒有數據</td>
          </tr>
        </template>
      </tbody>
    </table>
    <div class="block">
      <span class="demonstration">默认</span>
      <el-slider v-model="value1"></el-slider>
    </div>
    <img src="./assets/logo.png" />
    <div>
      <p>
        If Element is successfully added to this project, you'll see an
        <code v-text="'<el-button>'"></code>
        below
      </p>
      <el-button>el-button</el-button>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import axios from "axios";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import { apiUserDelete } from "./api.js";

export default {
  name: "app",
  data: function() {
    return {
      userList: []
    };
  },
  methods: {
    delUser(email) {
      // console.log(email);
      // axios.post("http://127.0.0.1:5000/admin/test2").then(res => {
      //   let delIndex = this.userList.findIndex(item => item.email === email);
      //   console.log(delIndex);
      // });

      ElementUI.MessageBox.confirm("是否真的要刪除嗎？", "刪除提醒")
        .then(() => {
          axios
            .post("api/admin/test2", { email: email })
            .then(res => console.log(res.data))
            .catch(err => {
              ElementUI.Message.info("刪除失敗！");
            });
        })
        .catch(() => {
          ElementUI.Message.info("取消刪除了！");
        });
    }
  },
  created() {
    axios
      .get("http://127.0.0.1:5000/admin/test2")
      .then(res => {
        this.userList = res.data;
        // this.userListt.push(...res.data);
      })
      .catch(err => {
        this.nextTick(function(err) {
          ElementUI.Message.info("加載失敗" + err);
        });
      }); // eslint-disable-line
  },
  components: {
    HelloWorld
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
