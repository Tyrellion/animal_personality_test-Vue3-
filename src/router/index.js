import { createRouter, createWebHashHistory } from "vue-router";

/* import MainIndex from '../components/mainIndex.vue' */
/* import SecondIndex from '../components/secondIndex.vue' */
/* import ThirdIndex from '../components/thirdIndex.vue'
import FourthIndex from '../components/fourthIndex.vue'
import AnswerPage from '../components/answerPage.vue'
import LieBao from '../view/LieBao.vue'
import HaiTun from '../view/HaiTun.vue'
import HuoLong from '../view/HuoLong.vue'
import KaoLa from '../view/KaoLa.vue'
import HaiXing from '../view/HaiXing.vue'
import MaoMi from '../view/MaoMi.vue' */

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      redirect: "/MainIndex", //设置默认指向的路径
      name: "主页",
    },
    {
      path: "/MainIndex", //设置默认指向的路径指向的是下面的MyHome组件
      /* component: MainIndex, */
      name: "MainIndex",
      component: () => import("../components/mainIndex.vue"),
    },
    {
      path: "/SecondIndex",
      component: () => import("../components/secondIndex.vue"),
    },
    {
      path: "/ThirdIndex",
      component: () => import("../components/thirdIndex.vue"),
    },
    {
      path: "/FourthIndex",
      component: () => import("../components/fourthIndex.vue"),
    },
    {
      path: "/AnswerPage",
      component: () => import("../components/answerPage.vue"),
    },
    {
      path: "/LieBao",
      component: () => import("../view/LieBao.vue"),
    },
    {
      path: "/HaiTun",
      component: () => import("../view/HaiTun.vue"),
    },
    {
      path: "/MaoMi",
      component: () => import("../view/MaoMi.vue"),
    },
    {
      path: "/HaiXing",
      component: () => import("../view/HaiXing.vue"),
    },
    {
      path: "/HuoLong",
      component: () => import("../view/HuoLong.vue"),
    },
    {
      path: "/KaoLa",
      component: () => import("../view/KaoLa.vue"),
    },
  ],
});

// 全局前置守卫（这里给出一个简单的鉴权示例）
// router.beforeEach((to, from, next) => {
//   if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
//   else next()
// })

export default router;
