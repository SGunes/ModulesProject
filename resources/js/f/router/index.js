import Vue from 'vue'
import VueRouter from 'vue-router'
import Slug from './Slug'
var beforeEach = require('./beforeEach.js')();
var afterEach = require('./afterEach.js')();

Vue.use(VueRouter);

const routes = [
    { path: '/:slug1', component: Slug },
    { path: '/:slug1/:slug2', component: Slug },
    { path: '/:slug1/:slug2/:slug3', component: Slug },
];

const router = new VueRouter({ mode: 'history', routes });

router.beforeEach((to, from, next) => { beforeEach.main(to, from, next); });
router.afterEach((to, from) => { afterEach.main(to, from); });

export { router };