import { createRouter, createWebHashHistory } from 'vue-router'
import Settings from '../views/Settings.vue'
import Weather from '../views/Weather.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: Weather,
            name: 'weather'
        },
        {
            path: '/settings',
            name: 'settings',
            component: Settings
        }
    ]
})

export default router