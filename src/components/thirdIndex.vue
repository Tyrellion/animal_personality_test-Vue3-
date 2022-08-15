<template>
  <form method="post">
    <table>
      <tr>
        <td>
          <h4>你继续探索<br />发现动物们正在聊天</h4>
          <h2>你想加入哪个讨论</h2>
          <input
            type="radio"
            name="q3"
            @click.once="changeA"
          />A.动物森林的社会系统<br />
          <input
            type="radio"
            name="q3"
            @click.once="changeB"
          />B.动物森林的有趣故事<br />
        </td>
      </tr>

      <router-link
        :to="{
          path: '/FourthIndex',
          /* query:{
            answer:answer
          } */
        }"
        ><tr>
          <td>
            <el-row>
              <el-button @click="choose" type="success" style="color: #006400" plain
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
  name: "ThirdIndex",
  /* data(){
      return{
        answer:this.$route.query.answer
      }
    }, */
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
  /* methods:{
   changeA() {
      this.$store.commit("changeA");
    },
    changeB() {
      this.$store.commit("changeB");
    },
  } */
};
</script>

<style></style>
