// Routing Rules Defined Here//

import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../weather/vue/weatherHome.vue"


const router = createRouter({
    history: createWebHistory(),
    routes: [{
        path: "",
        name: "home",
        component: HomeView,
    }
    ]
})

export default router