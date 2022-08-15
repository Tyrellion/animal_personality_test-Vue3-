<template>
  <form method="post">
    <table>
      <tr>
        <td>
          <h4>天色已晚<br />你回到现实<br />你手心里有一朵花<br /></h4>
          <h2>你带走它的理由是？</h2>
          <input
            type="radio"
            name="q4"
            @click.once="changeA"
          />A.和喜欢的人讲这次旅程<br />
          <input
            type="radio"
            name="q4"
            @click.once="changeB"
          />B.用心的珍藏起来<br />
        </td>
      </tr>

      <router-link
        :to="{
          path: '/AnswerPage',
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
  name: "FourthIndex",
  /*  data(){
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
  /*  methods:{
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
