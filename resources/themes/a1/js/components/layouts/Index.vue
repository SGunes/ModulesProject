<template>
    <div v-show="ready">
        <Banner></Banner>
        <Content></Content>
        <Footer></Footer>
    </div>
</template>

<script>
    import Banner from './banner/Index.vue'
    import Content from './content/Index.vue'
    import Footer from './footer/Index.vue'

    export default {
        data(){
            return {
                ready : false
            }
        },
        components: {
            Banner,
            Content,
            Footer
        },
        created() {
            var event = this;
            fEventBus.$on('layoutsReady',function (data) {
                event.ready = data;
            })
        }
    }
</script>

<style scoped>

</style>