<template>
  <h1 style="font-size: 50px; color: #b68337">
    动物性格：一年的31536000秒，你每秒都鲜活而有力！<br />
    必须做，应该做，想要做的事，你都会做好！<br />
    你是“贵人”：能力强，时薪贵的人！<br />
    你有CEO般的决策力，永远对选择困难症免疫。<br /><br />
    自身优势：你是最佳的leader，有磁石般的凝聚力和一贯的高标准<br />
    你是完美主义，将带领同伴奔向更开阔的高地<br />
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
  name: "LieBao",
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

<style scoped></style>
