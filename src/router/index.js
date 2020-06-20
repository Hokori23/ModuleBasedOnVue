import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/pages/Home.vue";
import Style from "./style";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "Home",
    component: Home,
    children: [Style],
}, ];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;