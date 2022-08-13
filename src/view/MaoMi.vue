<template>
  <h1 style="font-size: 50px; color: #ffd868">
    动物性格：你率性洒脱又温柔细腻，在宇宙问自由探险！<br />
    你享受滚烫而热烈的人生，简单纯粹不妥协！<br />
    你永远精力充沛，如活在极昼的日照中！<br />
    前日、昨日、今天、明日、后日，你是艺术家<br /><br />
    自身优势：你从不盲目崇拜，你身在哪里，哪里便是艺术家云集的旧金山！<br />
    你活在当下，破规则，不流俗的勇气令人激赏！
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
  name: "MaoMi",
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
