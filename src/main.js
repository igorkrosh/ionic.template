import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import store from './store';
import IonicStorage from './plugins/ionic-storage';
import YmapPlugin from 'vue-yandex-maps'


import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './theme/style.scss';

const app = createApp(App)
    .use(IonicVue)
    .use(store)
    .use(IonicStorage)
    .use(YmapPlugin, {
        apiKey: 'ed5f5ac6-1a0f-4894-83b8-ee7a6c71f1d0',
        lang: 'ru_RU', // Используемый язык
        coordorder: 'latlong', // Порядок задания географических координат
        debug: true, // Режим отладки
        version: '2.1' // Версия Я.Карт
    })
    .use(router);
  
router.isReady().then(() => {
  app.mount('#app');
});