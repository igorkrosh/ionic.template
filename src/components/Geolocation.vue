<template lang="pug">
.function-item
    h2 Геолокация
    YandexMap(:coordinates="coords" :controls="[]" map-type="hybrid" :zoom="zoom").ymap
        YandexMarker(v-if="marker" :coordinates="marker" marker-id="marker" type="Point" :radius="10" )
    //span {{geo}}
    button.btn(@click="GetGeoData") Мое местоположение

</template>

<script>
import { Geolocation } from '@capacitor/geolocation';

export default {
    name: "Geolocation",
    data() {
        return {
            geo: null,
            coords: [55.75, 37.61],
            marker: null,
            zoom: 10,
        }
    },
    methods: {
        async GetGeoData()
        {
            let data = await Geolocation.getCurrentPosition();

            this.geo = data.coords;
            this.coords = [this.geo.latitude, this.geo.longitude];
            this.marker = [this.geo.latitude, this.geo.longitude];

            this.zoom = 19;
        }
    }
}
</script>

<style scoped lang="scss">
.ymap
{
    height: 400px;
}

.btn
{
    margin-top: 20px;
}
</style>