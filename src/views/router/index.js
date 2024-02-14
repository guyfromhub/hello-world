// Routing Rules Defined Here//

import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../Todo/trialform.vue"


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