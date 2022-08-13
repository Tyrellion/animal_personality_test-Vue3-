<template>
  <h1 style="font-size: 50px; color: #4278af">
    动物性格：你是真正的理想主义者，梦里有海，越过星群！<br />
    你非常照顾他人的感情，治愈人于无形之中！<br />
    你的以笑 像大海波动的光，有种幸运的魔力！<br />
    你有丰盛的创造力，是美感和哲学的集大成者！<br /><br />
    自身优势：温和舒适，和你聊天就像泡温泉般舒心！<br />
    极浪漫，和你聊天，就像还原19世纪沙龙聚合！
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
  name: "HaiTun",
  setup() {
    const store = useStore();
    function restart() {
      store.commit("restart");
    }
    return { restart };
  },
  /*  methods: {
   restart(){
      this.$store.commit("restart");
   }
    
  }, */
};
</script>

<style></style>
