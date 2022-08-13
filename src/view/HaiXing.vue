<template>
  <h1 style="font-size: 50px; color: #fc5531">
    动物性格：你隐藏的是温、暖、光，展现的是冷、静、酷！<br />
    你可以将问题乔装打扮一番，变成机会的样子！<br />
    你用冷静智慧开拓前路，内心赤热点燃人心！<br />
    你遇事总是超然，面对挑战就变得超燃！<br /><br />
    自身优势：机智使你最大的加分项，好看不过是锦上添花！<br />
    你轻松计算最优解，人生游戏，你是开挂的存在
  </h1>
  <router-link to="/MainIndex"
    ><el-row>
      <el-button @click="restart" type="success" style="color: #006400" plain
        >重新探索</el-button
      ></el-row
    ></router-link
  >
</template>

<script>
import { useStore } from "vuex";

export default {
  name: "HaiXing",
  /* methods: {
   restart(){
      this.$store.commit("restart");
   }
    
  }, */
  setup() {
    const store = useStore();
    function restart() {
      store.commit("restart");
    }
    return { restart };
  },
};
</script>

<style></style>
