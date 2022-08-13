<template>
  <h1 style="font-size: 50px; color: red">
    动物性格：你危险又迷人，有点上头！<br />
    你来自充满创意、自由、好奇心的快乐星球！<br />
    你对人性有着敏镜触觉，能将感触化为智慧！<br />
    你健忘、笑点低，真是幸福生活的标配呀！<br /><br />
    自身优势：循规蹈矩是你的大忌，你有灵气且不按套路出牌！<br />
    和你做朋友感觉像和一群人做朋友，赚大了！
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
  name: "HuoLong",
  /*  methods: {
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
