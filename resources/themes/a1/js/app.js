require('../../../js/projects/f/bootstrap');
require('../../../js/projects/f/eventBus');

import { router } from '../../../js/projects/f/router/index'

import App from './App.vue';


const app = new Vue({
    el: '#app',
    router,
    render(h) { return h(App) }
});

fEventBus.onLoaded();