<template lang="pug">
.function-item
    h5 Уведомления:
    button.btn(@click="CreateSmallLocalNotification") Простое уведомление
    button.btn(@click="CreateLargeLocalNotification") Большое уведомление
</template>

<script>
import {LocalNotifications} from '@capacitor/local-notifications';

export default {
    name: "LocalNotification",
    data() {
        return {
            smallNotification: {
                notifications: [
                    {
                        id: 1,
                        title: 'Заголовок',
                        body: 'Полный большой и красивый текст',
                        channelId: 'main'
                    },
                ]
            },
            largeNotification: {
                notifications: [
                    {
                        id: 2,
                        title: 'Заголовок',
                        body: 'Превью текст',
                        largeBody: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                        channelId: 'main'
                    }
                ]
            }
        }
    },
    methods: {
        CreateSmallLocalNotification()
        {
            LocalNotifications.schedule(this.smallNotification)
        },
        CreateLargeLocalNotification()
        {
            LocalNotifications.schedule(this.largeNotification)
        }
    },
    mounted() {
        LocalNotifications.createChannel({
            id: 'main',
            description: 'Основные уведомления',
            name: 'Основные',
            visibility: 1
        })

        LocalNotifications.requestPermissions();
    }
}
</script>

<style scoped>

</style>