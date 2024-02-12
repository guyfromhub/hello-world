// Routing Rules Defined Here//

import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue"
import AboutView from "../views/AboutView.vue"
import CarView from "../views/CarView.vue"
import ContactView from "../views/ContactView.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [{
        path: "",
        name: "home",
        component: HomeView,
    },
    {
        path: "/about",
        name: "about",
        component: AboutView
    },
    {
        // id is used as a variable to parse it from one page to another and 
        path: "/cars/:id",
        name: "cars",
        component: CarView,
        children:
            [{
                path: "contact",
                component: ContactView
            }]
    }
    ]
})

export default router