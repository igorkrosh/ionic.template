<template lang="pug">
IonPage
	IonHeader(:translucent="true")
		IonToolbar
			IonTitle Blank
	IonContent(:fullscreen="true")
		IonHeader(collapse="condense")
			IonToolbar
				IonTitle(size="large") Blank
		div#container
			strong Ready to create an app?
			p 
				|Start with Ionic?
				a(target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components")
			Example
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
</script>

<style scoped>
#container {
	text-align: center;

	position: absolute;
	left: 0;
	right: 0;
	top: 50%;
	transform: translateY(-50%);
}

#container strong {
	font-size: 20px;
	line-height: 26px;
}

#container p {
	font-size: 16px;
	line-height: 22px;

	color: #8c8c8c;

	margin: 0;
}

#container a {
	text-decoration: none;
}
</style>
