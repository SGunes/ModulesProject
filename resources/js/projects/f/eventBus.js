import { tokenHelper } from '../../helpers/tokenHelper';

const fEventBus = new Vue({
    methods : Object.assign(
        tokenHelper(),
        {
            onLoaded(){
                this.$emit('onBanner','bannerTest');
                this.$emit('onContent','contentTest');
                this.$emit('onFooter','footerTest');

                this.$emit('layoutsReady',true);
            }
        }
    ),
});

window.fEventBus = fEventBus;

