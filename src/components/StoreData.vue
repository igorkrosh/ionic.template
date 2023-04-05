<template lang="pug">
.function-item
    h5 Локальные данные (VueX):
    .wrapper
        span Локальное значение: {{$store.getters.COUNT}}
        button.btn(@click="$store.commit('INCREMENT')") +
.function-item
    h5 Сохрание данных (IonicStorage):
    p Сохраненное значение: {{$store.getters.LOCAL}}
    input(v-model="newValue" )
    button.btn(@click="Save(newValue)") Сохранить


</template>

<script>
export default {
    name: "StoreData",
    data() {
        return {
            newValue: ''
        }
    },
    methods: {
        Save(data)
        {
            this.$store.dispatch('SAVE_LOCAL', data)
        }
    },
    mounted() {
        this.$store.dispatch('LOAD_LOCAL')
    }
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

input
{
    width: 100%;
    height: 45px;
    border-radius: 15px;
    border: 1px solid #818181;
    padding: 10px 20px;
    margin-bottom: 15px;
}
</style>