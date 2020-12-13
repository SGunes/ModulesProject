require('../../../js/f/bootstrap');
require('../../../js/f/eventBus');

import { router } from '../../../js/f/router/index'

import App from './App.vue';


const app = new Vue({
    el: '#app',
    router,
    render(h) { return h(App) }
});

fEventBus.onLoaded();