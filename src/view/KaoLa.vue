<template>
  <h1 style="font-size: 50px; color: #424242">
    动物性格：你是浪漫主义认真发呆专业户的快乐专家！<br />
    你沉稳如山，但愚公可动摇不了你！<br />
    你活得就像旁观者，享受松弛有趣的人生！<br />
    世界喧器，你也能守护住内心的一方净士！<br /><br />
    自身优势: 你有奥特曼的正义感，能像相信光一样相信你！<br />
    想要严道自律地走向成功？你就是参考答案！
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
  name: "KaoLa",
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
