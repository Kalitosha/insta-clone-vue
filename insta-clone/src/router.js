import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history', // чтобы убрать решетку из url // это Режим HTML5 History
    routes: [
        {
            path: '/',
            component: () => import("@/pages/Index.vue") // функция загрузки компонента по объявленному пути
        },
        {
            path: '/sample',
            component: () => import("@/pages/Sample.vue") // функция загрузки компонента по объявленному пути
        },
        {
            path: '/wall',
            component: () => import("@/pages/Wall.vue") // функция загрузки компонента по объявленному пути
        }
    ]
});
