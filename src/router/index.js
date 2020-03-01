import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children:[{
      path:"/goods",
      name:"goods",
      component:()=>import("../views/Goods.vue")
    },
    {
      path:"evaluate",
      name:"evaluate",
      component:()=>import("../views/Evaluate.vue")
    },
    {
      path:"/merchant",
      name:"merchant",
      component:()=>import("../views/Merchant.vue")
    }]
  
  },
];

const router = new VueRouter({
  routes
});

export default router;
