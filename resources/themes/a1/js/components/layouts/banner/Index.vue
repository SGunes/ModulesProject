<template>
    <div>
        <ul>
            <router-link to="/foo">Go to Foo</router-link>
            <router-link to="/bar">Go to Bar</router-link>
        </ul>
    </div>
</template>

<script>
    export default {
        created() {
            fEventBus.$on('onBanner',function (data) {
                console.log(data);
            })
        }
    }
</script>

<style scoped>

</style>