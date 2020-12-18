import { tokenHelper } from '../../helpers/tokenHelper';
import axios from './axios/index'

const fEventBus = new Vue({
    data: {
        /**
         * token variable
         */
        token : null,
    },
    methods : Object.assign(
        tokenHelper(),
        {
            onLoaded(){
                axios({
                    method: 'post',
                    url: 'http://localhost:8000/api/auth/login',
                    data: {
                        email: 'selahattin.gunes.55@gmail.com',
                        password: '12341234'
                    }
                }).then(function (response) {
                    console.log(response)
                });


                this.$emit('onBanner','bannerTest');
                this.$emit('onContent','contentTest');
                this.$emit('onFooter','footerTest');

                this.$emit('layoutsReady',true);
            }
        }
    ),
});

window.fEventBus = fEventBus;

