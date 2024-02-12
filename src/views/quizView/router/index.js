import { createRouter, createWebHistory } from "vue-router";
import quizstart from "../views/quizstart.vue"
import quizView from "../views/quiz.vue"
import quizendView from "../views/quizend.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [{
        path: "",
        name: "QuizStart",
        component: quizstart,
    },
    {
        path: "/quiz",
        name: "quizview",
        component: quizView
    },
    {
        path: "/quizend/:marks",
        name: "quizEnd",
        component: quizendView
    },
    ]
})

export default router