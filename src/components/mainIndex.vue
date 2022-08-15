<template>
  <h1>{{ $store.state.answer }}</h1>

  <h1>有趣的性格测试</h1>
  <hr />
  <form method="post">
    <table>
      <tr>
        <td>
          <h4>你来到了爪哇国的动物森林<br />看到一个奇妙的世界</h4>
          <h2>你希望这段旅程</h2>
          <br /><input
            type="radio"
            name="q1"
            @click="changeA"
          />A.跟着蝴蝶的指引<br />
          <input
            type="radio"
            name="q1"
            @click="changeB"
          />B.自由自在的游玩<br />
        </td>
      </tr>

      <router-link
        :to="{
          path: '/SecondIndex',
          /*  query: {
              answer: answer,
            }, */
        }"
        ><tr>
          <td>
            <el-row>
              <el-button
                @click="choose"
                type="success"
                style="color: #006400"
                plain
                >继续探索</el-button
              ></el-row
            >
          </td>
        </tr></router-link
      >
      <router-view></router-view>
    </table>
  </form>

  <div class="bear"></div>
</template>

<script>
import { useStore } from "vuex";
export default {
  name: "MainIndex",
  setup() {
    const store = useStore();
    function changeA() {
      store.commit("whichA");
    }
    function changeB() {
      store.commit("whichB");
    }
    function choose() {
      if (store.state.which === "A") {
        store.commit("changeA");
      } else {
        store.commit("changeB");
      }
    }
    return { changeA, changeB, choose };
  },
  /* methods: {
   changeA() {
      this.$store.commit("changeA");
    },
    changeB() {
      this.$store.commit("changeB");
    },

  }, */
};
</script>

<style>
.bear {
  position: absolute;
  width: 170px;
  height: 100px;
  background: url(../picture/bear.png) no-repeat;
  /* 我们元素可以添加多个动画， 用逗号分隔 */
  animation: bear 0.4s steps(8) infinite, move 3s forwards;
}
@keyframes bear {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: -1600px 0;
  }
}

@keyframes move {
  0% {
    left: 0;
  }
  100% {
    left: 50%;
    /* margin-left: -100px; */
    transform: translateX(-50%);
  }
}
body {
  background-color: #e1f3d8;
}
div {
  background-color: #e1f3d8;
  width: 1500px;
  padding: 15px;
  border: none;
  margin: 0;
  text-align: center;
}
table {
  width: 1500px;
  padding: 0;
  line-height: 180%;
}
h1 {
  font-weight: bold;
  color: darkgreen;
}
h2 {
  font-weight: bold;
}
tr {
  font-family: "微软雅黑";
  color: #006400;
  font-size: 20px;
}
input {
  margin: 10px;
}
#button {
  font-size: 15px;
  width: 100px;
  height: 40px;
  font-weight: bold;
}
.el-button {
  margin: 0 auto;
}
a {
  text-decoration: none;
}

.router-link-active {
  text-decoration: none;
}
</style>
