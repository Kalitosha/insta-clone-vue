import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history', // чтобы убрать решетку из url // это Режим HTML5 History
    routes: [
        {
            path: '/wall',
            component: () => import("@/pages/Wall.vue") // функция загрузки компонента по объявленному пути
        },
        {
            path: '/post/:id',
            component: () => import("@/pages/Post.vue") // один пост
        },
        {
            path: '/post/:id/edit',
            component: () => import("@/pages/PostEditor.vue") // один пост в режиме редактирования
        },
        
        {
            path: '*',
            redirect: '/wall'
        }

    ]
});
