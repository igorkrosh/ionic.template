<template lang="pug">
.function-item
    h5 Локальные данные (VueX):
    .wrapper
        span Локальное значение: {{$store.getters.STATE}}
        button.btn(@click="$store.commit('INCREMENT')") +


</template>

<script>
export default {
    name: "StoreData"
}
</script>

<style scoped lang="scss">
.wrapper
{
    display: flex;
    padding: 0;
    flex-wrap: wrap;
    width: 100%;
    align-items: center;

    .btn
    {
        margin-bottom: 0;
        padding: 0;
        width: 40px;
        height: 40px;
        margin-left: auto;

    }
}
</style>