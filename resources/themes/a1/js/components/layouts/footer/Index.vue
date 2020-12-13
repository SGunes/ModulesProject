<template>
    <div>
        footer
    </div>
</template>

<script>
    export default {
        created() {
            fEventBus.$on('onFooter',function (data) {
                console.log(data);
            })
        }
    }
</script>

<style scoped>

</style>