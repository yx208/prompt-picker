import {createRouter, createWebHistory} from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            redirect: "/dataset"
        },
        {
            path: "/dataset",
            component: () => import("../views/Dataset/index.vue")
        }
    ]
});

export default router;
