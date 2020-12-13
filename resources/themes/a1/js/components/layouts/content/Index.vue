<template>
    <div>
        <router-view>seeeeee</router-view>
    </div>
</template>

<script>
    export default {
        created() {
            fEventBus.$on('onContent',function (data) {
                console.log(data);
            })
        }
    }
</script>

<style scoped>

</style>