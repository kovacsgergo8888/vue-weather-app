import { createRouter, createWebHashHistory } from 'vue-router'
import Settings from '../views/Settings.vue'

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/settings',
            component: Settings
        }
    ]
})