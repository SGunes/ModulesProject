import tokenClass from '../tokenClass'

const fEventBus = new Vue({
    methods : {
        getToken(){
            return tokenClass.getToken();
        },
        setToken(token){
            tokenClass.setToken(token);
        },
        onLoaded(){
            this.$emit('onBanner','bannerTest');
            this.$emit('onContent','contentTest');
            this.$emit('onFooter','footerTest');

            this.$emit('layoutsReady',true);
        }
    },
});

window.fEventBus = fEventBus;

