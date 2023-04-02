<template lang="pug">
IonPage
    IonContent
        Example
        .function-item
            h5 Выводим изображение:
            img(src="/assets/shapes.svg")
        LocalNotification
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

</script>

<style scoped>

</style>
