<template>
  <div
    v-if="
      $store.state.answer === '0ABAA' ||
      $store.state.answer === '0ABAB' ||
      $store.state.answerr === '0AAAA'
    "
  >
    <h1 style="font-size: 100px; color: #b68337; margin-top: 0">
      出手便结束战斗的豹
    </h1>
    <img src="../picture/豹子.jpg" alt="" style="width: 40%" />

    <router-link to="/LieBao"
      ><el-row>
        <el-button type="success" style="color: #006400" plain
          >查看详细信息</el-button
        ></el-row
      ></router-link
    >
  </div>

  <div
    v-if="
      $store.state.answer === '0AABA' ||
      $store.state.answer === '0BABB' ||
      $store.state.answer === '0BAAA'
    "
  >
    <h1 style="font-size: 100px; color: #fc5531; margin-top: 0">
      静观潮起潮落的海星
    </h1>
    <img src="../picture/海星.webp" alt="" style="width: 40%" />
    <router-link to="/HaiXing"
      ><el-row>
        <el-button type="success" style="color: #006400" plain
          >查看详细信息</el-button
        ></el-row
      ></router-link
    >
  </div>
  <div
    v-if="
      $store.state.answer === '0BBAA' ||
      $store.state.answer === '0BBAB' ||
      $store.state.answer === '0BAAB'
    "
  >
    <h1 style="font-size: 100px; color: red; margin-top: 0">
      快乐星球的小火龙
    </h1>
    <img src="../picture/小火龙.webp" alt="" style="width: 30%" />
    <router-link to="/HuoLong"
      ><el-row>
        <el-button type="success" style="color: #006400" plain
          >查看详细信息</el-button
        ></el-row
      ></router-link
    >
  </div>
  <div
    v-if="
      $store.state.answer === '0AABB' ||
      $store.state.answer === '0BABA' ||
      $store.state.answer === '0AAAB'
    "
  >
    <h1 style="font-size: 100px; color: #ffd766; margin-top: 0">
      银河系行走的猫
    </h1>
    <img src="../picture/猫咪.webp" alt="" style="width: 40%" />
    <router-link to="/MaoMi"
      ><el-row>
        <el-button type="success" style="color: #006400" plain
          >查看详细信息</el-button
        ></el-row
      ></router-link
    >
  </div>
  <div
    v-if="$store.state.answer === '0ABBA' || $store.state.answer === '0BBBA'"
  >
    <h1 style="font-size: 100px; color: #424242; margin-top: 0">
      发呆也要专心的考拉
    </h1>
    <img src="../picture/考拉.webp" alt="" style="width: 40%" />
    <router-link to="/KaoLa"
      ><el-row>
        <el-button type="success" style="color: #006400" plain
          >查看详细信息</el-button
        ></el-row
      ></router-link
    >
  </div>
  <div
    v-if="$store.state.answer === '0BBBB' || $store.state.answer === '0ABBB'"
  >
    <h1 style="font-size: 100px; color: #4278af; margin-top: 0">
      枕着星河入梦的海豚
    </h1>
    <img src="../picture/海豚.webp" alt="" style="width: 40%" />
    <router-link to="/HaiTun"
      ><el-row>
        <el-button type="success" style="color: #006400" plain
          >查看详细信息</el-button
        ></el-row
      ></router-link
    >
  </div>

  <div
    v-if="
      $store.state.answer.length === 1 ||
      $store.state.answer.length === 2 ||
      $store.state.answer.length === 3 ||
      $store.state.answer.length === 4
    "
  >
    <h1 style="color: #006400; font-size: 80px">还有旅程没有体验哦!</h1>
  </div>
  <router-link to="/MainIndex">
    <tr>
      <td>
        <el-row>
          <el-button
            @click="restart"
            v-if="
              $store.state.answer.length === 1 ||
              $store.state.answer.length === 2 ||
              $store.state.answer.length === 3 ||
              $store.state.answer.length === 4
            "
            type="success"
            style="color: #006400"
            plain
            >重新探索</el-button
          ></el-row
        >
      </td>
    </tr>
  </router-link>
</template>

<script>
import { useStore } from "vuex";
export default {
  name: "AnswerPage",
  /* data() {
    return {
      else: this.$route.query.answer,
    };
  }, */
  setup() {
    const store = useStore();
    function restart() {
      store.commit("restart");
    }
    return { restart };
  },
  /* methods: {
   restart(){
      this.$store.commit("restart");
   }
    
  }, */
};
</script>

<style></style>
