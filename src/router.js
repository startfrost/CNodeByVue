import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './views/Home.vue';
import Topic from './views/Topic.vue';

Vue.use(VueRouter);

const routes = [{
    path: '/',
    component: Home
}, {
    path: '/topic/:id',
    component: Topic
}];

const router = new VueRouter({
    routes: routes
});

export default router;