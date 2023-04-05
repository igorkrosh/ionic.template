<template lang="pug">
IonPage
    IonContent
        Example
        .function-item
            h5 Выводим изображение:
            img(src="/assets/shapes.svg")
        LocalNotification
        StoreData
</template>

<script setup>
import {
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar,
} from "@ionic/vue";

import Example from "../components/Example.vue";
import LocalNotification from "@/components/LocalNotification";
import StoreData from "@/components/StoreData";

</script>

<style scoped>

</style>
