import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Posts from "../views/Posts.vue";
import Login from "../views/Login";
import Register from "../views/Register";
import Reset from "../views/Reset";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: 'Home'
    }
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      title: 'Login'
    }
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: {
      title: 'Register'
    }
  },
  {
    path: "/reset",
    name: "Reset",
    component: Reset,
    meta: {
      title: 'Reset'
    }
  },
  {
    path: "/posts",
    name: "Posts",
    component: Posts,
    meta: {
      title: 'Posts'
    }
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | _GADAMUROV`
  next()
})

export default router;
