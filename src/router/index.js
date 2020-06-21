import Vue from "vue";
import VueRouter from "vue-router";
import HomeLayout from "@/layouts/Home.vue";
import Home from "@/pages/Home.vue";
import StyleLayout from '@/layouts/Style.vue'
import Style from "./style";
import ComponentsLayout from '@/layouts/Components.vue'
Vue.use(VueRouter);

const routes = [{
        path: "/",
        component: HomeLayout,
        children: [{
            path: "",
            component: Home,
            name: "Home",
        }, ],
    },
    {
        path: "/style",
        component: StyleLayout,
        children: Style,
    },
    {
        path: '/components',
        component: ComponentsLayout,

    },
    {
        path: "*",
        component: () => {
            import ("@/pages/Error404.vue");
        },
    },
];

const router = new VueRouter({
    scrollBehavior: () => ({ x: 0, y: 0 }),
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;